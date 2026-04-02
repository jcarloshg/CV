import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

// Simulamos nuestra base de datos gigante en memoria (50,000 registros)
const massiveData = Array.from({ length: 50000 }, (_, i) => `Donación #${i + 1} - $100.00`);

export const VirtualizedList = () => {
    // 1. Referencia al contenedor físico que tendrá la barra de scroll
    const parentRef = useRef<HTMLDivElement>(null);

    // 2. El cerebro: Configuramos el virtualizador
    const rowVirtualizer = useVirtualizer({
        count: massiveData.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40, // Altura estimada de cada fila (40px)
    });

    return (
        // CONTENEDOR PADRE: Debe tener una altura fija y 'overflow: auto'
        <div
            ref={parentRef}
            style={{ height: '400px', width: '100%', overflow: 'auto', border: '1px solid #ccc' }}
        >
            {/* CONTENEDOR FANTASMA: Fuerza a que la barra de scroll del navegador 
          crea que hay 50,000 elementos renderizados (40px * 50,000 = 2,000,000px de altura) */}
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {/* EL BUCLE MÁGICO: Solo iteramos sobre los elementos VISIBLES (aprox. 12 nodos) */}
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <div
                        key={virtualRow.index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: `${virtualRow.size}px`,
                            // Aquí está el truco: Movemos el nodo HTML reciclado a su posición exacta con CSS
                            transform: `translateY(${virtualRow.start}px)`,
                            padding: '8px 16px',
                            borderBottom: '1px solid #eee'
                        }}
                    >
                        {massiveData[virtualRow.index]}
                    </div>
                ))}
            </div>
        </div>
    );
};