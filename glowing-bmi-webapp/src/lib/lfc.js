export const lfc = (mc, losfingFatRate, bodyMassRate) => {
    return Math.floor((mc - (mc * bodyMassRate)) * losfingFatRate);
};