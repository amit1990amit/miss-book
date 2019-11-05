'use strict'

export const utilService = {
    loadFromStorage,
    saveToStorage

}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
} 