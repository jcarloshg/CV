import os
import requests

LINKS_FILE = 'links.text'
OUTPUT_DIR = 'readmes'
BRANCHES = ['main', 'master']

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

def get_repo_info(url):
    """Extract user and repo from GitHub URL."""
    try:
        parts = url.strip().split('/')
        user = parts[3]
        repo = parts[4]
        return user, repo
    except Exception:
        return None, None

def download_readme(user, repo):
    for branch in BRANCHES:
        raw_url = f"https://raw.githubusercontent.com/{user}/{repo}/{branch}/README.md"
        resp = requests.get(raw_url)
        if resp.status_code == 200:
            return resp.text
    return None

def main():
    with open(LINKS_FILE, 'r') as f:
        links = [line.strip() for line in f if line.strip()]

    for url in links:
        user, repo = get_repo_info(url)
        if not user or not repo:
            print(f"Invalid URL: {url}")
            continue
        print(f"Fetching README for {user}/{repo}...")
        readme = download_readme(user, repo)
        if readme:
            out_path = os.path.join(OUTPUT_DIR, f"{repo}_README.md")
            with open(out_path, 'w', encoding='utf-8') as out_f:
                out_f.write(readme)
            print(f"Saved: {out_path}")
        else:
            print(f"README not found for {user}/{repo}")

if __name__ == '__main__':
    main()
