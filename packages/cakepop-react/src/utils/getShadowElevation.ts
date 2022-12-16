export const bwLow = 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px';
export const bwMed = 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px';
export const bwHigh = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';

export const getMatchLow = (col: string) => {
  let shadow = `${col} 0px 1px 3px, ${col} 0px 1px 2px`;
  return shadow;
};

export const getMatchMed = (col: string) => {
  let shadow = `${col} 0px 3px 6px, ${col} 0px 3px 6px`;
  return shadow;
};

export const getMatchHigh = (col: string) => {
  let shadow = `${col} 0px 10px 20px, ${col} 0px 6px 6px`;
  return shadow;
};
