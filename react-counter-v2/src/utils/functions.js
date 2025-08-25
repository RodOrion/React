export const reset = (index, counts, setCounts) => {
    const newCounters = [...counts]
    newCounters[index] = 0
    setCounts(newCounters);
};

export const updateCounter = (index, symbol, counts, setCounts) => {
    const newCounters = [...counts]
    symbol === "+" ? newCounters[index]++ : newCounters[index]--;
    setCounts(newCounters)
  }