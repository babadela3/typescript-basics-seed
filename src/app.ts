function orderError(errorMessage: string): never {
    throw Error(errorMessage);
}

orderError('Error Message');