/* Shared formatting helpers so every numbered card/step uses the same style. */

/* 0-based index → "01", "02", ... — the number shown on cards and steps. */
export const indexLabel = (i) => String(i + 1).padStart(2, "0");
