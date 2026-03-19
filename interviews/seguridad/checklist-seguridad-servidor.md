# Checklist de Seguridad para Servidor Local (Cliente Nuevo)

## 1. Configuración Inicial del SO

- [ ] Actualizar todos los paquetes del sistema operativo
- [ ] Cambiar puerto SSH default (22) a uno personalizado
- [ ] Deshabilitar acceso root por SSH
- [ ] Configurar firewall (UFW/iptables)
- [ ] Deshabilitar servicios innecesarios

## 2. Autenticación y Acceso

- [ ] Usar claves SSH en lugar de contraseñas
- [ ] Configurar fail2ban para prevenir ataques de fuerza bruta
- [ ] Implementar autenticación de dos factores (2FA)
- [ ] Crear usuarios con privilegios mínimos

## 3. Red y Comunicación

- [ ] Configurar SSL/TLS (Let's Encrypt)
- [ ] Usar conexiones cifradas (TLS 1.2+)
- [ ] Implementar VPN si es acceso remoto
- [ ] Configurar rate limiting

## 4. Datos y Base de Datos

- [ ] Encriptar datos en reposo
- [ ] Configurar backups automáticos
- [ ] Usar credenciales fuertes y rotarlas
- [ ] Implementar Row Level Security (si aplica)

## 5. Monitoreo y Logging

- [ ] Habilitar logs de auditoría
- [ ] Configurar alertas de seguridad
- [ ] Implementar monitoreo de integridad
- [ ] Configurar retención de logs

## 6. Aplicación/Web

- [ ] Headers de seguridad (CSP, HSTS, X-Frame-Options)
- [ ] Validar inputs del usuario
- [ ] Sanitizar salidas
- [ ] Actualizar dependencias regularmente
