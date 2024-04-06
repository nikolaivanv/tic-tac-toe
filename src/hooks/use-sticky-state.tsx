import React, { useState, useEffect } from 'react';

export const useStickyState = <T extends unknown>(key: string, defaultValue: T): [T, (value: T) => void] => {
    const [value, setValue] = useState<T>(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null 
            ? JSON.parse(stickyValue) 
            : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}