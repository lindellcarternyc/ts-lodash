type PredicateFunction<T> = (value: T) => boolean
type PredicateMatchObject<T> = Partial<T>
type PredicatePropertyMatch<T, K extends keyof T> = [K, T[K]]
type PredicateProperty = string

type Predicate<T, K extends keyof T> =
  | PredicateFunction<T>
  | PredicateMatchObject<T>
  | PredicatePropertyMatch<T, K>
  | PredicateProperty
