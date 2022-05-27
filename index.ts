// 指定したプロパティのみをoptionalにする
export type PartiallyPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// 指定したプロパティのみを必須にする
export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// 指定したプロパティの型を変更する
export type PartiallyChangeType<T, K extends keyof T, U extends string | number | boolean | Record<string, unknown>> = Omit<
    T, K> & { [key in K]: U };

// オブジェクトの値をユニオン型に変換
export type ValueOf<T extends Record<string, unknown>> = T[keyof T];

// オブジェクトの値にundefinedを追加
export type Uncertain<T extends Record<string, unknown>> = { [key in keyof T]: T[key] | undefined };