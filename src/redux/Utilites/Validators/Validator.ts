export const required = (value: any): string | undefined => {
	if (value) return undefined;
	return "Это обязательное поле";
};

export const maxLengthCreator = (maxLength: number) => (value: string): string | undefined => {
	// Сначала проверяем есть ли вэлью
	if (value && value.length > maxLength)
		return `Максимальная длина ${maxLength} символов`;
	return undefined;
};
