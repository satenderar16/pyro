
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model items
 * 
 */
export type items = $Result.DefaultSelection<Prisma.$itemsPayload>
/**
 * Model options
 * 
 */
export type options = $Result.DefaultSelection<Prisma.$optionsPayload>
/**
 * Model orderOptions
 * 
 */
export type orderOptions = $Result.DefaultSelection<Prisma.$orderOptionsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model refreshToken
 * 
 */
export type refreshToken = $Result.DefaultSelection<Prisma.$refreshTokenPayload>
/**
 * Model unit_classes
 * 
 */
export type unit_classes = $Result.DefaultSelection<Prisma.$unit_classesPayload>
/**
 * Model units
 * 
 */
export type units = $Result.DefaultSelection<Prisma.$unitsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const itemType: {
  PACKAGE: 'PACKAGE',
  LOOSE: 'LOOSE'
};

export type itemType = (typeof itemType)[keyof typeof itemType]


export const currencyType: {
  INR: 'INR',
  USD: 'USD',
  EUR: 'EUR'
};

export type currencyType = (typeof currencyType)[keyof typeof currencyType]


export const orderStatus: {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  CANCELLED: 'CANCELLED'
};

export type orderStatus = (typeof orderStatus)[keyof typeof orderStatus]


export const paymentType: {
  CASH: 'CASH',
  CASHLESS: 'CASHLESS',
  HYBRID: 'HYBRID'
};

export type paymentType = (typeof paymentType)[keyof typeof paymentType]

}

export type itemType = $Enums.itemType

export const itemType: typeof $Enums.itemType

export type currencyType = $Enums.currencyType

export const currencyType: typeof $Enums.currencyType

export type orderStatus = $Enums.orderStatus

export const orderStatus: typeof $Enums.orderStatus

export type paymentType = $Enums.paymentType

export const paymentType: typeof $Enums.paymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.options`: Exposes CRUD operations for the **options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.options.findMany()
    * ```
    */
  get options(): Prisma.optionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderOptions`: Exposes CRUD operations for the **orderOptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderOptions
    * const orderOptions = await prisma.orderOptions.findMany()
    * ```
    */
  get orderOptions(): Prisma.orderOptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **refreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.refreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit_classes`: Exposes CRUD operations for the **unit_classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unit_classes
    * const unit_classes = await prisma.unit_classes.findMany()
    * ```
    */
  get unit_classes(): Prisma.unit_classesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.units`: Exposes CRUD operations for the **units** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.units.findMany()
    * ```
    */
  get units(): Prisma.unitsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    categories: 'categories',
    items: 'items',
    options: 'options',
    orderOptions: 'orderOptions',
    orders: 'orders',
    refreshToken: 'refreshToken',
    unit_classes: 'unit_classes',
    units: 'units'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "categories" | "items" | "options" | "orderOptions" | "orders" | "refreshToken" | "unit_classes" | "units"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      items: {
        payload: Prisma.$itemsPayload<ExtArgs>
        fields: Prisma.itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findFirst: {
            args: Prisma.itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          findMany: {
            args: Prisma.itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          create: {
            args: Prisma.itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          createMany: {
            args: Prisma.itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          delete: {
            args: Prisma.itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          update: {
            args: Prisma.itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          deleteMany: {
            args: Prisma.itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>[]
          }
          upsert: {
            args: Prisma.itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
          }
        }
      }
      options: {
        payload: Prisma.$optionsPayload<ExtArgs>
        fields: Prisma.optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.optionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.optionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>
          }
          findFirst: {
            args: Prisma.optionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.optionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>
          }
          findMany: {
            args: Prisma.optionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>[]
          }
          create: {
            args: Prisma.optionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>
          }
          createMany: {
            args: Prisma.optionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.optionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>[]
          }
          delete: {
            args: Prisma.optionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>
          }
          update: {
            args: Prisma.optionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>
          }
          deleteMany: {
            args: Prisma.optionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.optionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.optionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>[]
          }
          upsert: {
            args: Prisma.optionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$optionsPayload>
          }
          aggregate: {
            args: Prisma.OptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptions>
          }
          groupBy: {
            args: Prisma.optionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.optionsCountArgs<ExtArgs>
            result: $Utils.Optional<OptionsCountAggregateOutputType> | number
          }
        }
      }
      orderOptions: {
        payload: Prisma.$orderOptionsPayload<ExtArgs>
        fields: Prisma.orderOptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderOptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderOptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>
          }
          findFirst: {
            args: Prisma.orderOptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderOptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>
          }
          findMany: {
            args: Prisma.orderOptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>[]
          }
          create: {
            args: Prisma.orderOptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>
          }
          createMany: {
            args: Prisma.orderOptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderOptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>[]
          }
          delete: {
            args: Prisma.orderOptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>
          }
          update: {
            args: Prisma.orderOptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>
          }
          deleteMany: {
            args: Prisma.orderOptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderOptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderOptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>[]
          }
          upsert: {
            args: Prisma.orderOptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderOptionsPayload>
          }
          aggregate: {
            args: Prisma.OrderOptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderOptions>
          }
          groupBy: {
            args: Prisma.orderOptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderOptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderOptionsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderOptionsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      refreshToken: {
        payload: Prisma.$refreshTokenPayload<ExtArgs>
        fields: Prisma.refreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          findFirst: {
            args: Prisma.refreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          findMany: {
            args: Prisma.refreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>[]
          }
          create: {
            args: Prisma.refreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          createMany: {
            args: Prisma.refreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.refreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>[]
          }
          delete: {
            args: Prisma.refreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          update: {
            args: Prisma.refreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.refreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.refreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.refreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.refreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.refreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      unit_classes: {
        payload: Prisma.$unit_classesPayload<ExtArgs>
        fields: Prisma.unit_classesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unit_classesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unit_classesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>
          }
          findFirst: {
            args: Prisma.unit_classesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unit_classesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>
          }
          findMany: {
            args: Prisma.unit_classesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>[]
          }
          create: {
            args: Prisma.unit_classesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>
          }
          createMany: {
            args: Prisma.unit_classesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.unit_classesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>[]
          }
          delete: {
            args: Prisma.unit_classesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>
          }
          update: {
            args: Prisma.unit_classesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>
          }
          deleteMany: {
            args: Prisma.unit_classesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unit_classesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.unit_classesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>[]
          }
          upsert: {
            args: Prisma.unit_classesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unit_classesPayload>
          }
          aggregate: {
            args: Prisma.Unit_classesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit_classes>
          }
          groupBy: {
            args: Prisma.unit_classesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Unit_classesGroupByOutputType>[]
          }
          count: {
            args: Prisma.unit_classesCountArgs<ExtArgs>
            result: $Utils.Optional<Unit_classesCountAggregateOutputType> | number
          }
        }
      }
      units: {
        payload: Prisma.$unitsPayload<ExtArgs>
        fields: Prisma.unitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          findFirst: {
            args: Prisma.unitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          findMany: {
            args: Prisma.unitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          create: {
            args: Prisma.unitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          createMany: {
            args: Prisma.unitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.unitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          delete: {
            args: Prisma.unitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          update: {
            args: Prisma.unitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          deleteMany: {
            args: Prisma.unitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.unitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>[]
          }
          upsert: {
            args: Prisma.unitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unitsPayload>
          }
          aggregate: {
            args: Prisma.UnitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnits>
          }
          groupBy: {
            args: Prisma.unitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.unitsCountArgs<ExtArgs>
            result: $Utils.Optional<UnitsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    categories?: categoriesOmit
    items?: itemsOmit
    options?: optionsOmit
    orderOptions?: orderOptionsOmit
    orders?: ordersOmit
    refreshToken?: refreshTokenOmit
    unit_classes?: unit_classesOmit
    units?: unitsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    categories_categories_created_byTousers: number
    categories_categories_updated_byTousers: number
    categories_categories_user_idTousers: number
    items_items_created_byTousers: number
    items_items_updated_byTousers: number
    options_options_created_byTousers: number
    options_options_updated_byTousers: number
    order_options_order_options_created_byTousers: number
    order_options_order_options_updated_byTousers: number
    orders_orders_created_byTousers: number
    orders_orders_status_changed_byTousers: number
    orders_orders_user_idTousers: number
    refreshTokens: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_categories_created_byTousers?: boolean | UsersCountOutputTypeCountCategories_categories_created_byTousersArgs
    categories_categories_updated_byTousers?: boolean | UsersCountOutputTypeCountCategories_categories_updated_byTousersArgs
    categories_categories_user_idTousers?: boolean | UsersCountOutputTypeCountCategories_categories_user_idTousersArgs
    items_items_created_byTousers?: boolean | UsersCountOutputTypeCountItems_items_created_byTousersArgs
    items_items_updated_byTousers?: boolean | UsersCountOutputTypeCountItems_items_updated_byTousersArgs
    options_options_created_byTousers?: boolean | UsersCountOutputTypeCountOptions_options_created_byTousersArgs
    options_options_updated_byTousers?: boolean | UsersCountOutputTypeCountOptions_options_updated_byTousersArgs
    order_options_order_options_created_byTousers?: boolean | UsersCountOutputTypeCountOrder_options_order_options_created_byTousersArgs
    order_options_order_options_updated_byTousers?: boolean | UsersCountOutputTypeCountOrder_options_order_options_updated_byTousersArgs
    orders_orders_created_byTousers?: boolean | UsersCountOutputTypeCountOrders_orders_created_byTousersArgs
    orders_orders_status_changed_byTousers?: boolean | UsersCountOutputTypeCountOrders_orders_status_changed_byTousersArgs
    orders_orders_user_idTousers?: boolean | UsersCountOutputTypeCountOrders_orders_user_idTousersArgs
    refreshTokens?: boolean | UsersCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategories_categories_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategories_categories_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategories_categories_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountItems_items_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountItems_items_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOptions_options_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOptions_options_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrder_options_order_options_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderOptionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrder_options_order_options_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderOptionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrders_orders_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrders_orders_status_changed_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrders_orders_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refreshTokenWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    other_categories: number
    items: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_categories?: boolean | CategoriesCountOutputTypeCountOther_categoriesArgs
    items?: boolean | CategoriesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountOther_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
  }


  /**
   * Count Type ItemsCountOutputType
   */

  export type ItemsCountOutputType = {
    options: number
  }

  export type ItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | ItemsCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsCountOutputType
     */
    select?: ItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionsWhereInput
  }


  /**
   * Count Type OptionsCountOutputType
   */

  export type OptionsCountOutputType = {
    order_options: number
  }

  export type OptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_options?: boolean | OptionsCountOutputTypeCountOrder_optionsArgs
  }

  // Custom InputTypes
  /**
   * OptionsCountOutputType without action
   */
  export type OptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionsCountOutputType
     */
    select?: OptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionsCountOutputType without action
   */
  export type OptionsCountOutputTypeCountOrder_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderOptionsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_options: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_options?: boolean | OrdersCountOutputTypeCountOrder_optionsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderOptionsWhereInput
  }


  /**
   * Count Type Unit_classesCountOutputType
   */

  export type Unit_classesCountOutputType = {
    units: number
  }

  export type Unit_classesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Unit_classesCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * Unit_classesCountOutputType without action
   */
  export type Unit_classesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit_classesCountOutputType
     */
    select?: Unit_classesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Unit_classesCountOutputType without action
   */
  export type Unit_classesCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unitsWhereInput
  }


  /**
   * Count Type UnitsCountOutputType
   */

  export type UnitsCountOutputType = {
    options: number
    order_options: number
  }

  export type UnitsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | UnitsCountOutputTypeCountOptionsArgs
    order_options?: boolean | UnitsCountOutputTypeCountOrder_optionsArgs
  }

  // Custom InputTypes
  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitsCountOutputType
     */
    select?: UnitsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionsWhereInput
  }

  /**
   * UnitsCountOutputType without action
   */
  export type UnitsCountOutputTypeCountOrder_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderOptionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    business_name: string | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    business_name: string | null
    deleted_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    email: number
    business_name: number
    deleted_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    business_name?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    business_name?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    business_name?: true
    deleted_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    username: string
    password: string
    email: string
    business_name: string | null
    deleted_at: Date | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    business_name?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories_categories_created_byTousers?: boolean | users$categories_categories_created_byTousersArgs<ExtArgs>
    categories_categories_updated_byTousers?: boolean | users$categories_categories_updated_byTousersArgs<ExtArgs>
    categories_categories_user_idTousers?: boolean | users$categories_categories_user_idTousersArgs<ExtArgs>
    items_items_created_byTousers?: boolean | users$items_items_created_byTousersArgs<ExtArgs>
    items_items_updated_byTousers?: boolean | users$items_items_updated_byTousersArgs<ExtArgs>
    options_options_created_byTousers?: boolean | users$options_options_created_byTousersArgs<ExtArgs>
    options_options_updated_byTousers?: boolean | users$options_options_updated_byTousersArgs<ExtArgs>
    order_options_order_options_created_byTousers?: boolean | users$order_options_order_options_created_byTousersArgs<ExtArgs>
    order_options_order_options_updated_byTousers?: boolean | users$order_options_order_options_updated_byTousersArgs<ExtArgs>
    orders_orders_created_byTousers?: boolean | users$orders_orders_created_byTousersArgs<ExtArgs>
    orders_orders_status_changed_byTousers?: boolean | users$orders_orders_status_changed_byTousersArgs<ExtArgs>
    orders_orders_user_idTousers?: boolean | users$orders_orders_user_idTousersArgs<ExtArgs>
    refreshTokens?: boolean | users$refreshTokensArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    business_name?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    business_name?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    business_name?: boolean
    deleted_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "email" | "business_name" | "deleted_at" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories_categories_created_byTousers?: boolean | users$categories_categories_created_byTousersArgs<ExtArgs>
    categories_categories_updated_byTousers?: boolean | users$categories_categories_updated_byTousersArgs<ExtArgs>
    categories_categories_user_idTousers?: boolean | users$categories_categories_user_idTousersArgs<ExtArgs>
    items_items_created_byTousers?: boolean | users$items_items_created_byTousersArgs<ExtArgs>
    items_items_updated_byTousers?: boolean | users$items_items_updated_byTousersArgs<ExtArgs>
    options_options_created_byTousers?: boolean | users$options_options_created_byTousersArgs<ExtArgs>
    options_options_updated_byTousers?: boolean | users$options_options_updated_byTousersArgs<ExtArgs>
    order_options_order_options_created_byTousers?: boolean | users$order_options_order_options_created_byTousersArgs<ExtArgs>
    order_options_order_options_updated_byTousers?: boolean | users$order_options_order_options_updated_byTousersArgs<ExtArgs>
    orders_orders_created_byTousers?: boolean | users$orders_orders_created_byTousersArgs<ExtArgs>
    orders_orders_status_changed_byTousers?: boolean | users$orders_orders_status_changed_byTousersArgs<ExtArgs>
    orders_orders_user_idTousers?: boolean | users$orders_orders_user_idTousersArgs<ExtArgs>
    refreshTokens?: boolean | users$refreshTokensArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      categories_categories_created_byTousers: Prisma.$categoriesPayload<ExtArgs>[]
      categories_categories_updated_byTousers: Prisma.$categoriesPayload<ExtArgs>[]
      categories_categories_user_idTousers: Prisma.$categoriesPayload<ExtArgs>[]
      items_items_created_byTousers: Prisma.$itemsPayload<ExtArgs>[]
      items_items_updated_byTousers: Prisma.$itemsPayload<ExtArgs>[]
      options_options_created_byTousers: Prisma.$optionsPayload<ExtArgs>[]
      options_options_updated_byTousers: Prisma.$optionsPayload<ExtArgs>[]
      order_options_order_options_created_byTousers: Prisma.$orderOptionsPayload<ExtArgs>[]
      order_options_order_options_updated_byTousers: Prisma.$orderOptionsPayload<ExtArgs>[]
      orders_orders_created_byTousers: Prisma.$ordersPayload<ExtArgs>[]
      orders_orders_status_changed_byTousers: Prisma.$ordersPayload<ExtArgs>[]
      orders_orders_user_idTousers: Prisma.$ordersPayload<ExtArgs>[]
      refreshTokens: Prisma.$refreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      password: string
      email: string
      business_name: string | null
      deleted_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories_categories_created_byTousers<T extends users$categories_categories_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$categories_categories_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories_categories_updated_byTousers<T extends users$categories_categories_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$categories_categories_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories_categories_user_idTousers<T extends users$categories_categories_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$categories_categories_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items_items_created_byTousers<T extends users$items_items_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$items_items_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items_items_updated_byTousers<T extends users$items_items_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$items_items_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    options_options_created_byTousers<T extends users$options_options_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$options_options_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    options_options_updated_byTousers<T extends users$options_options_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$options_options_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_options_order_options_created_byTousers<T extends users$order_options_order_options_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$order_options_order_options_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_options_order_options_updated_byTousers<T extends users$order_options_order_options_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$order_options_order_options_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders_orders_created_byTousers<T extends users$orders_orders_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$orders_orders_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders_orders_status_changed_byTousers<T extends users$orders_orders_status_changed_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$orders_orders_status_changed_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders_orders_user_idTousers<T extends users$orders_orders_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$orders_orders_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends users$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, users$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly business_name: FieldRef<"users", 'String'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.categories_categories_created_byTousers
   */
  export type users$categories_categories_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.categories_categories_updated_byTousers
   */
  export type users$categories_categories_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.categories_categories_user_idTousers
   */
  export type users$categories_categories_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * users.items_items_created_byTousers
   */
  export type users$items_items_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    cursor?: itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * users.items_items_updated_byTousers
   */
  export type users$items_items_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    cursor?: itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * users.options_options_created_byTousers
   */
  export type users$options_options_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    where?: optionsWhereInput
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    cursor?: optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * users.options_options_updated_byTousers
   */
  export type users$options_options_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    where?: optionsWhereInput
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    cursor?: optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * users.order_options_order_options_created_byTousers
   */
  export type users$order_options_order_options_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    where?: orderOptionsWhereInput
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    cursor?: orderOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * users.order_options_order_options_updated_byTousers
   */
  export type users$order_options_order_options_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    where?: orderOptionsWhereInput
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    cursor?: orderOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * users.orders_orders_created_byTousers
   */
  export type users$orders_orders_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.orders_orders_status_changed_byTousers
   */
  export type users$orders_orders_status_changed_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.orders_orders_user_idTousers
   */
  export type users$orders_orders_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.refreshTokens
   */
  export type users$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    where?: refreshTokenWhereInput
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    cursor?: refreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    parent_id: string | null
    name: string | null
    image_url: string | null
    user_id: string | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    parent_id: string | null
    name: string | null
    image_url: string | null
    user_id: string | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    parent_id: number
    name: number
    image_url: number
    user_id: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    parent_id?: true
    name?: true
    image_url?: true
    user_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    deleted_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    parent_id?: true
    name?: true
    image_url?: true
    user_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    deleted_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    parent_id?: true
    name?: true
    image_url?: true
    user_id?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    parent_id: string | null
    name: string
    image_url: string | null
    user_id: string
    created_at: Date
    created_by: string
    updated_at: Date
    updated_by: string
    deleted_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    name?: boolean
    image_url?: boolean
    user_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | categories$itemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    name?: boolean
    image_url?: boolean
    user_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    name?: boolean
    image_url?: boolean
    user_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    parent_id?: boolean
    name?: boolean
    image_url?: boolean
    user_id?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parent_id" | "name" | "image_url" | "user_id" | "created_at" | "created_by" | "updated_at" | "updated_by" | "deleted_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | categories$itemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_categories_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    users_categories_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_categories_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      users_categories_created_byTousers: Prisma.$usersPayload<ExtArgs>
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      other_categories: Prisma.$categoriesPayload<ExtArgs>[]
      users_categories_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      users_categories_user_idTousers: Prisma.$usersPayload<ExtArgs>
      items: Prisma.$itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parent_id: string | null
      name: string
      image_url: string | null
      user_id: string
      created_at: Date
      created_by: string
      updated_at: Date
      updated_by: string
      deleted_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_categories_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends categories$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_categories<T extends categories$other_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$other_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_categories_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_categories_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends categories$itemsArgs<ExtArgs> = {}>(args?: Subset<T, categories$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'String'>
    readonly parent_id: FieldRef<"categories", 'String'>
    readonly name: FieldRef<"categories", 'String'>
    readonly image_url: FieldRef<"categories", 'String'>
    readonly user_id: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
    readonly created_by: FieldRef<"categories", 'String'>
    readonly updated_at: FieldRef<"categories", 'DateTime'>
    readonly updated_by: FieldRef<"categories", 'String'>
    readonly deleted_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.categories
   */
  export type categories$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * categories.other_categories
   */
  export type categories$other_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories.items
   */
  export type categories$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    cursor?: itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsMinAggregateOutputType = {
    id: string | null
    name: string | null
    image_url: string | null
    cat_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by: string | null
    updated_by: string | null
    type: $Enums.itemType | null
  }

  export type ItemsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image_url: string | null
    cat_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by: string | null
    updated_by: string | null
    type: $Enums.itemType | null
  }

  export type ItemsCountAggregateOutputType = {
    id: number
    name: number
    image_url: number
    cat_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    created_by: number
    updated_by: number
    type: number
    _all: number
  }


  export type ItemsMinAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    cat_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    type?: true
  }

  export type ItemsMaxAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    cat_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    type?: true
  }

  export type ItemsCountAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    cat_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    type?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to aggregate.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemsWhereInput
    orderBy?: itemsOrderByWithAggregationInput | itemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    id: string
    name: string
    image_url: string | null
    cat_id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    created_by: string
    updated_by: string
    type: $Enums.itemType
    _count: ItemsCountAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    cat_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    type?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users_items_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_items_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | items$optionsArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    cat_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    type?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users_items_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_items_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    cat_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    type?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users_items_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_items_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type itemsSelectScalar = {
    id?: boolean
    name?: boolean
    image_url?: boolean
    cat_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    type?: boolean
  }

  export type itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image_url" | "cat_id" | "created_at" | "updated_at" | "deleted_at" | "created_by" | "updated_by" | "type", ExtArgs["result"]["items"]>
  export type itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users_items_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_items_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | items$optionsArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users_items_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_items_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    users_items_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_items_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "items"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
      users_items_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_items_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      options: Prisma.$optionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image_url: string | null
      cat_id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      created_by: string
      updated_by: string
      type: $Enums.itemType
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type itemsGetPayload<S extends boolean | null | undefined | itemsDefaultArgs> = $Result.GetResult<Prisma.$itemsPayload, S>

  type itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['items'], meta: { name: 'items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {itemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemsFindUniqueArgs>(args: SelectSubset<T, itemsFindUniqueArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemsFindFirstArgs>(args?: SelectSubset<T, itemsFindFirstArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemsWithIdOnly = await prisma.items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itemsFindManyArgs>(args?: SelectSubset<T, itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items.
     * @param {itemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends itemsCreateArgs>(args: SelectSubset<T, itemsCreateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemsCreateManyArgs>(args?: SelectSubset<T, itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Items.
     * @param {itemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends itemsDeleteArgs>(args: SelectSubset<T, itemsDeleteArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items.
     * @param {itemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemsUpdateArgs>(args: SelectSubset<T, itemsUpdateArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemsDeleteManyArgs>(args?: SelectSubset<T, itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemsUpdateManyArgs>(args: SelectSubset<T, itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {itemsUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemsWithIdOnly = await prisma.items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Items.
     * @param {itemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends itemsUpsertArgs>(args: SelectSubset<T, itemsUpsertArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemsCountArgs>(
      args?: Subset<T, itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemsGroupByArgs['orderBy'] }
        : { orderBy?: itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the items model
   */
  readonly fields: itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_items_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_items_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends items$optionsArgs<ExtArgs> = {}>(args?: Subset<T, items$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the items model
   */
  interface itemsFieldRefs {
    readonly id: FieldRef<"items", 'String'>
    readonly name: FieldRef<"items", 'String'>
    readonly image_url: FieldRef<"items", 'String'>
    readonly cat_id: FieldRef<"items", 'String'>
    readonly created_at: FieldRef<"items", 'DateTime'>
    readonly updated_at: FieldRef<"items", 'DateTime'>
    readonly deleted_at: FieldRef<"items", 'DateTime'>
    readonly created_by: FieldRef<"items", 'String'>
    readonly updated_by: FieldRef<"items", 'String'>
    readonly type: FieldRef<"items", 'itemType'>
  }
    

  // Custom InputTypes
  /**
   * items findUnique
   */
  export type itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findUniqueOrThrow
   */
  export type itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items findFirst
   */
  export type itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findFirstOrThrow
   */
  export type itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items findMany
   */
  export type itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemsOrderByWithRelationInput | itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * items create
   */
  export type itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a items.
     */
    data: XOR<itemsCreateInput, itemsUncheckedCreateInput>
  }

  /**
   * items createMany
   */
  export type itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * items createManyAndReturn
   */
  export type itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemsCreateManyInput | itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * items update
   */
  export type itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a items.
     */
    data: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
    /**
     * Choose, which items to update.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items updateMany
   */
  export type itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * items updateManyAndReturn
   */
  export type itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * The data used to update items.
     */
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * items upsert
   */
  export type itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the items to update in case it exists.
     */
    where: itemsWhereUniqueInput
    /**
     * In case the items found by the `where` argument doesn't exist, create a new items with this data.
     */
    create: XOR<itemsCreateInput, itemsUncheckedCreateInput>
    /**
     * In case the items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemsUpdateInput, itemsUncheckedUpdateInput>
  }

  /**
   * items delete
   */
  export type itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
    /**
     * Filter which items to delete.
     */
    where: itemsWhereUniqueInput
  }

  /**
   * items deleteMany
   */
  export type itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemsWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * items.options
   */
  export type items$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    where?: optionsWhereInput
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    cursor?: optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * items without action
   */
  export type itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the items
     */
    select?: itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the items
     */
    omit?: itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemsInclude<ExtArgs> | null
  }


  /**
   * Model options
   */

  export type AggregateOptions = {
    _count: OptionsCountAggregateOutputType | null
    _avg: OptionsAvgAggregateOutputType | null
    _sum: OptionsSumAggregateOutputType | null
    _min: OptionsMinAggregateOutputType | null
    _max: OptionsMaxAggregateOutputType | null
  }

  export type OptionsAvgAggregateOutputType = {
    price_per_base_unit: Decimal | null
  }

  export type OptionsSumAggregateOutputType = {
    price_per_base_unit: Decimal | null
  }

  export type OptionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    price_per_base_unit: Decimal | null
    unit_id: string | null
    item_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by: string | null
    updated_by: string | null
    currency: $Enums.currencyType | null
  }

  export type OptionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price_per_base_unit: Decimal | null
    unit_id: string | null
    item_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by: string | null
    updated_by: string | null
    currency: $Enums.currencyType | null
  }

  export type OptionsCountAggregateOutputType = {
    id: number
    name: number
    price_per_base_unit: number
    unit_id: number
    item_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    created_by: number
    updated_by: number
    currency: number
    _all: number
  }


  export type OptionsAvgAggregateInputType = {
    price_per_base_unit?: true
  }

  export type OptionsSumAggregateInputType = {
    price_per_base_unit?: true
  }

  export type OptionsMinAggregateInputType = {
    id?: true
    name?: true
    price_per_base_unit?: true
    unit_id?: true
    item_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    currency?: true
  }

  export type OptionsMaxAggregateInputType = {
    id?: true
    name?: true
    price_per_base_unit?: true
    unit_id?: true
    item_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    currency?: true
  }

  export type OptionsCountAggregateInputType = {
    id?: true
    name?: true
    price_per_base_unit?: true
    unit_id?: true
    item_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    currency?: true
    _all?: true
  }

  export type OptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which options to aggregate.
     */
    where?: optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned options
    **/
    _count?: true | OptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionsMaxAggregateInputType
  }

  export type GetOptionsAggregateType<T extends OptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateOptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptions[P]>
      : GetScalarType<T[P], AggregateOptions[P]>
  }




  export type optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: optionsWhereInput
    orderBy?: optionsOrderByWithAggregationInput | optionsOrderByWithAggregationInput[]
    by: OptionsScalarFieldEnum[] | OptionsScalarFieldEnum
    having?: optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionsCountAggregateInputType | true
    _avg?: OptionsAvgAggregateInputType
    _sum?: OptionsSumAggregateInputType
    _min?: OptionsMinAggregateInputType
    _max?: OptionsMaxAggregateInputType
  }

  export type OptionsGroupByOutputType = {
    id: string
    name: string
    price_per_base_unit: Decimal
    unit_id: string
    item_id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    created_by: string
    updated_by: string
    currency: $Enums.currencyType
    _count: OptionsCountAggregateOutputType | null
    _avg: OptionsAvgAggregateOutputType | null
    _sum: OptionsSumAggregateOutputType | null
    _min: OptionsMinAggregateOutputType | null
    _max: OptionsMaxAggregateOutputType | null
  }

  type GetOptionsGroupByPayload<T extends optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionsGroupByOutputType[P]>
            : GetScalarType<T[P], OptionsGroupByOutputType[P]>
        }
      >
    >


  export type optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price_per_base_unit?: boolean
    unit_id?: boolean
    item_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    currency?: boolean
    users_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | itemsDefaultArgs<ExtArgs>
    users_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    order_options?: boolean | options$order_optionsArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
    _count?: boolean | OptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["options"]>

  export type optionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price_per_base_unit?: boolean
    unit_id?: boolean
    item_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    currency?: boolean
    users_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | itemsDefaultArgs<ExtArgs>
    users_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["options"]>

  export type optionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price_per_base_unit?: boolean
    unit_id?: boolean
    item_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    currency?: boolean
    users_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | itemsDefaultArgs<ExtArgs>
    users_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["options"]>

  export type optionsSelectScalar = {
    id?: boolean
    name?: boolean
    price_per_base_unit?: boolean
    unit_id?: boolean
    item_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    currency?: boolean
  }

  export type optionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price_per_base_unit" | "unit_id" | "item_id" | "created_at" | "updated_at" | "deleted_at" | "created_by" | "updated_by" | "currency", ExtArgs["result"]["options"]>
  export type optionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | itemsDefaultArgs<ExtArgs>
    users_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    order_options?: boolean | options$order_optionsArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
    _count?: boolean | OptionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type optionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | itemsDefaultArgs<ExtArgs>
    users_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }
  export type optionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | itemsDefaultArgs<ExtArgs>
    users_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }

  export type $optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "options"
    objects: {
      users_options_created_byTousers: Prisma.$usersPayload<ExtArgs>
      items: Prisma.$itemsPayload<ExtArgs>
      users_options_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      order_options: Prisma.$orderOptionsPayload<ExtArgs>[]
      units: Prisma.$unitsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price_per_base_unit: Prisma.Decimal
      unit_id: string
      item_id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      created_by: string
      updated_by: string
      currency: $Enums.currencyType
    }, ExtArgs["result"]["options"]>
    composites: {}
  }

  type optionsGetPayload<S extends boolean | null | undefined | optionsDefaultArgs> = $Result.GetResult<Prisma.$optionsPayload, S>

  type optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionsCountAggregateInputType | true
    }

  export interface optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['options'], meta: { name: 'options' } }
    /**
     * Find zero or one Options that matches the filter.
     * @param {optionsFindUniqueArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends optionsFindUniqueArgs>(args: SelectSubset<T, optionsFindUniqueArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {optionsFindUniqueOrThrowArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends optionsFindUniqueOrThrowArgs>(args: SelectSubset<T, optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionsFindFirstArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends optionsFindFirstArgs>(args?: SelectSubset<T, optionsFindFirstArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionsFindFirstOrThrowArgs} args - Arguments to find a Options
     * @example
     * // Get one Options
     * const options = await prisma.options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends optionsFindFirstOrThrowArgs>(args?: SelectSubset<T, optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.options.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionsWithIdOnly = await prisma.options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends optionsFindManyArgs>(args?: SelectSubset<T, optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Options.
     * @param {optionsCreateArgs} args - Arguments to create a Options.
     * @example
     * // Create one Options
     * const Options = await prisma.options.create({
     *   data: {
     *     // ... data to create a Options
     *   }
     * })
     * 
     */
    create<T extends optionsCreateArgs>(args: SelectSubset<T, optionsCreateArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {optionsCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const options = await prisma.options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends optionsCreateManyArgs>(args?: SelectSubset<T, optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {optionsCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const options = await prisma.options.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionsWithIdOnly = await prisma.options.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends optionsCreateManyAndReturnArgs>(args?: SelectSubset<T, optionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Options.
     * @param {optionsDeleteArgs} args - Arguments to delete one Options.
     * @example
     * // Delete one Options
     * const Options = await prisma.options.delete({
     *   where: {
     *     // ... filter to delete one Options
     *   }
     * })
     * 
     */
    delete<T extends optionsDeleteArgs>(args: SelectSubset<T, optionsDeleteArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Options.
     * @param {optionsUpdateArgs} args - Arguments to update one Options.
     * @example
     * // Update one Options
     * const options = await prisma.options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends optionsUpdateArgs>(args: SelectSubset<T, optionsUpdateArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {optionsDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends optionsDeleteManyArgs>(args?: SelectSubset<T, optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const options = await prisma.options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends optionsUpdateManyArgs>(args: SelectSubset<T, optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {optionsUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const options = await prisma.options.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionsWithIdOnly = await prisma.options.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends optionsUpdateManyAndReturnArgs>(args: SelectSubset<T, optionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Options.
     * @param {optionsUpsertArgs} args - Arguments to update or create a Options.
     * @example
     * // Update or create a Options
     * const options = await prisma.options.upsert({
     *   create: {
     *     // ... data to create a Options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Options we want to update
     *   }
     * })
     */
    upsert<T extends optionsUpsertArgs>(args: SelectSubset<T, optionsUpsertArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionsCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.options.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends optionsCountArgs>(
      args?: Subset<T, optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionsAggregateArgs>(args: Subset<T, OptionsAggregateArgs>): Prisma.PrismaPromise<GetOptionsAggregateType<T>>

    /**
     * Group by Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {optionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: optionsGroupByArgs['orderBy'] }
        : { orderBy?: optionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the options model
   */
  readonly fields: optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_options_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemsDefaultArgs<ExtArgs>>): Prisma__itemsClient<$Result.GetResult<Prisma.$itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_options_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_options<T extends options$order_optionsArgs<ExtArgs> = {}>(args?: Subset<T, options$order_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    units<T extends unitsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unitsDefaultArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the options model
   */
  interface optionsFieldRefs {
    readonly id: FieldRef<"options", 'String'>
    readonly name: FieldRef<"options", 'String'>
    readonly price_per_base_unit: FieldRef<"options", 'Decimal'>
    readonly unit_id: FieldRef<"options", 'String'>
    readonly item_id: FieldRef<"options", 'String'>
    readonly created_at: FieldRef<"options", 'DateTime'>
    readonly updated_at: FieldRef<"options", 'DateTime'>
    readonly deleted_at: FieldRef<"options", 'DateTime'>
    readonly created_by: FieldRef<"options", 'String'>
    readonly updated_by: FieldRef<"options", 'String'>
    readonly currency: FieldRef<"options", 'currencyType'>
  }
    

  // Custom InputTypes
  /**
   * options findUnique
   */
  export type optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * Filter, which options to fetch.
     */
    where: optionsWhereUniqueInput
  }

  /**
   * options findUniqueOrThrow
   */
  export type optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * Filter, which options to fetch.
     */
    where: optionsWhereUniqueInput
  }

  /**
   * options findFirst
   */
  export type optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * Filter, which options to fetch.
     */
    where?: optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for options.
     */
    cursor?: optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of options.
     */
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * options findFirstOrThrow
   */
  export type optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * Filter, which options to fetch.
     */
    where?: optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for options.
     */
    cursor?: optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of options.
     */
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * options findMany
   */
  export type optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * Filter, which options to fetch.
     */
    where?: optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of options to fetch.
     */
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing options.
     */
    cursor?: optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of options.
     */
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * options create
   */
  export type optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * The data needed to create a options.
     */
    data: XOR<optionsCreateInput, optionsUncheckedCreateInput>
  }

  /**
   * options createMany
   */
  export type optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many options.
     */
    data: optionsCreateManyInput | optionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * options createManyAndReturn
   */
  export type optionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * The data used to create many options.
     */
    data: optionsCreateManyInput | optionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * options update
   */
  export type optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * The data needed to update a options.
     */
    data: XOR<optionsUpdateInput, optionsUncheckedUpdateInput>
    /**
     * Choose, which options to update.
     */
    where: optionsWhereUniqueInput
  }

  /**
   * options updateMany
   */
  export type optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update options.
     */
    data: XOR<optionsUpdateManyMutationInput, optionsUncheckedUpdateManyInput>
    /**
     * Filter which options to update
     */
    where?: optionsWhereInput
    /**
     * Limit how many options to update.
     */
    limit?: number
  }

  /**
   * options updateManyAndReturn
   */
  export type optionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * The data used to update options.
     */
    data: XOR<optionsUpdateManyMutationInput, optionsUncheckedUpdateManyInput>
    /**
     * Filter which options to update
     */
    where?: optionsWhereInput
    /**
     * Limit how many options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * options upsert
   */
  export type optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * The filter to search for the options to update in case it exists.
     */
    where: optionsWhereUniqueInput
    /**
     * In case the options found by the `where` argument doesn't exist, create a new options with this data.
     */
    create: XOR<optionsCreateInput, optionsUncheckedCreateInput>
    /**
     * In case the options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<optionsUpdateInput, optionsUncheckedUpdateInput>
  }

  /**
   * options delete
   */
  export type optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    /**
     * Filter which options to delete.
     */
    where: optionsWhereUniqueInput
  }

  /**
   * options deleteMany
   */
  export type optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which options to delete
     */
    where?: optionsWhereInput
    /**
     * Limit how many options to delete.
     */
    limit?: number
  }

  /**
   * options.order_options
   */
  export type options$order_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    where?: orderOptionsWhereInput
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    cursor?: orderOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * options without action
   */
  export type optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
  }


  /**
   * Model orderOptions
   */

  export type AggregateOrderOptions = {
    _count: OrderOptionsCountAggregateOutputType | null
    _avg: OrderOptionsAvgAggregateOutputType | null
    _sum: OrderOptionsSumAggregateOutputType | null
    _min: OrderOptionsMinAggregateOutputType | null
    _max: OrderOptionsMaxAggregateOutputType | null
  }

  export type OrderOptionsAvgAggregateOutputType = {
    quantity: Decimal | null
    price_per_base_unit: Decimal | null
  }

  export type OrderOptionsSumAggregateOutputType = {
    quantity: Decimal | null
    price_per_base_unit: Decimal | null
  }

  export type OrderOptionsMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    option_id: string | null
    unit_id: string | null
    quantity: Decimal | null
    price_per_base_unit: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type OrderOptionsMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    option_id: string | null
    unit_id: string | null
    quantity: Decimal | null
    price_per_base_unit: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type OrderOptionsCountAggregateOutputType = {
    id: number
    order_id: number
    option_id: number
    unit_id: number
    quantity: number
    price_per_base_unit: number
    created_at: number
    updated_at: number
    deleted_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type OrderOptionsAvgAggregateInputType = {
    quantity?: true
    price_per_base_unit?: true
  }

  export type OrderOptionsSumAggregateInputType = {
    quantity?: true
    price_per_base_unit?: true
  }

  export type OrderOptionsMinAggregateInputType = {
    id?: true
    order_id?: true
    option_id?: true
    unit_id?: true
    quantity?: true
    price_per_base_unit?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
  }

  export type OrderOptionsMaxAggregateInputType = {
    id?: true
    order_id?: true
    option_id?: true
    unit_id?: true
    quantity?: true
    price_per_base_unit?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
  }

  export type OrderOptionsCountAggregateInputType = {
    id?: true
    order_id?: true
    option_id?: true
    unit_id?: true
    quantity?: true
    price_per_base_unit?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type OrderOptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderOptions to aggregate.
     */
    where?: orderOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderOptions to fetch.
     */
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderOptions
    **/
    _count?: true | OrderOptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderOptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderOptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderOptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderOptionsMaxAggregateInputType
  }

  export type GetOrderOptionsAggregateType<T extends OrderOptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderOptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderOptions[P]>
      : GetScalarType<T[P], AggregateOrderOptions[P]>
  }




  export type orderOptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderOptionsWhereInput
    orderBy?: orderOptionsOrderByWithAggregationInput | orderOptionsOrderByWithAggregationInput[]
    by: OrderOptionsScalarFieldEnum[] | OrderOptionsScalarFieldEnum
    having?: orderOptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderOptionsCountAggregateInputType | true
    _avg?: OrderOptionsAvgAggregateInputType
    _sum?: OrderOptionsSumAggregateInputType
    _min?: OrderOptionsMinAggregateInputType
    _max?: OrderOptionsMaxAggregateInputType
  }

  export type OrderOptionsGroupByOutputType = {
    id: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal
    price_per_base_unit: Decimal
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    created_by: string
    updated_by: string
    _count: OrderOptionsCountAggregateOutputType | null
    _avg: OrderOptionsAvgAggregateOutputType | null
    _sum: OrderOptionsSumAggregateOutputType | null
    _min: OrderOptionsMinAggregateOutputType | null
    _max: OrderOptionsMaxAggregateOutputType | null
  }

  type GetOrderOptionsGroupByPayload<T extends orderOptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderOptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderOptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderOptionsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderOptionsGroupByOutputType[P]>
        }
      >
    >


  export type orderOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    option_id?: boolean
    unit_id?: boolean
    quantity?: boolean
    price_per_base_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    users_order_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | optionsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    users_order_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderOptions"]>

  export type orderOptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    option_id?: boolean
    unit_id?: boolean
    quantity?: boolean
    price_per_base_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    users_order_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | optionsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    users_order_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderOptions"]>

  export type orderOptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    option_id?: boolean
    unit_id?: boolean
    quantity?: boolean
    price_per_base_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    users_order_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | optionsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    users_order_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderOptions"]>

  export type orderOptionsSelectScalar = {
    id?: boolean
    order_id?: boolean
    option_id?: boolean
    unit_id?: boolean
    quantity?: boolean
    price_per_base_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type orderOptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "option_id" | "unit_id" | "quantity" | "price_per_base_unit" | "created_at" | "updated_at" | "deleted_at" | "created_by" | "updated_by", ExtArgs["result"]["orderOptions"]>
  export type orderOptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_order_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | optionsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    users_order_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }
  export type orderOptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_order_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | optionsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    users_order_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }
  export type orderOptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_order_options_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    options?: boolean | optionsDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    users_order_options_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    units?: boolean | unitsDefaultArgs<ExtArgs>
  }

  export type $orderOptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderOptions"
    objects: {
      users_order_options_created_byTousers: Prisma.$usersPayload<ExtArgs>
      options: Prisma.$optionsPayload<ExtArgs>
      orders: Prisma.$ordersPayload<ExtArgs>
      users_order_options_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      units: Prisma.$unitsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      option_id: string
      unit_id: string
      quantity: Prisma.Decimal
      price_per_base_unit: Prisma.Decimal
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["orderOptions"]>
    composites: {}
  }

  type orderOptionsGetPayload<S extends boolean | null | undefined | orderOptionsDefaultArgs> = $Result.GetResult<Prisma.$orderOptionsPayload, S>

  type orderOptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderOptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderOptionsCountAggregateInputType | true
    }

  export interface orderOptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderOptions'], meta: { name: 'orderOptions' } }
    /**
     * Find zero or one OrderOptions that matches the filter.
     * @param {orderOptionsFindUniqueArgs} args - Arguments to find a OrderOptions
     * @example
     * // Get one OrderOptions
     * const orderOptions = await prisma.orderOptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderOptionsFindUniqueArgs>(args: SelectSubset<T, orderOptionsFindUniqueArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderOptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderOptionsFindUniqueOrThrowArgs} args - Arguments to find a OrderOptions
     * @example
     * // Get one OrderOptions
     * const orderOptions = await prisma.orderOptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderOptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, orderOptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderOptionsFindFirstArgs} args - Arguments to find a OrderOptions
     * @example
     * // Get one OrderOptions
     * const orderOptions = await prisma.orderOptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderOptionsFindFirstArgs>(args?: SelectSubset<T, orderOptionsFindFirstArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderOptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderOptionsFindFirstOrThrowArgs} args - Arguments to find a OrderOptions
     * @example
     * // Get one OrderOptions
     * const orderOptions = await prisma.orderOptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderOptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, orderOptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderOptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderOptions
     * const orderOptions = await prisma.orderOptions.findMany()
     * 
     * // Get first 10 OrderOptions
     * const orderOptions = await prisma.orderOptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderOptionsWithIdOnly = await prisma.orderOptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderOptionsFindManyArgs>(args?: SelectSubset<T, orderOptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderOptions.
     * @param {orderOptionsCreateArgs} args - Arguments to create a OrderOptions.
     * @example
     * // Create one OrderOptions
     * const OrderOptions = await prisma.orderOptions.create({
     *   data: {
     *     // ... data to create a OrderOptions
     *   }
     * })
     * 
     */
    create<T extends orderOptionsCreateArgs>(args: SelectSubset<T, orderOptionsCreateArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderOptions.
     * @param {orderOptionsCreateManyArgs} args - Arguments to create many OrderOptions.
     * @example
     * // Create many OrderOptions
     * const orderOptions = await prisma.orderOptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderOptionsCreateManyArgs>(args?: SelectSubset<T, orderOptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderOptions and returns the data saved in the database.
     * @param {orderOptionsCreateManyAndReturnArgs} args - Arguments to create many OrderOptions.
     * @example
     * // Create many OrderOptions
     * const orderOptions = await prisma.orderOptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderOptions and only return the `id`
     * const orderOptionsWithIdOnly = await prisma.orderOptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderOptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, orderOptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderOptions.
     * @param {orderOptionsDeleteArgs} args - Arguments to delete one OrderOptions.
     * @example
     * // Delete one OrderOptions
     * const OrderOptions = await prisma.orderOptions.delete({
     *   where: {
     *     // ... filter to delete one OrderOptions
     *   }
     * })
     * 
     */
    delete<T extends orderOptionsDeleteArgs>(args: SelectSubset<T, orderOptionsDeleteArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderOptions.
     * @param {orderOptionsUpdateArgs} args - Arguments to update one OrderOptions.
     * @example
     * // Update one OrderOptions
     * const orderOptions = await prisma.orderOptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderOptionsUpdateArgs>(args: SelectSubset<T, orderOptionsUpdateArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderOptions.
     * @param {orderOptionsDeleteManyArgs} args - Arguments to filter OrderOptions to delete.
     * @example
     * // Delete a few OrderOptions
     * const { count } = await prisma.orderOptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderOptionsDeleteManyArgs>(args?: SelectSubset<T, orderOptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderOptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderOptions
     * const orderOptions = await prisma.orderOptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderOptionsUpdateManyArgs>(args: SelectSubset<T, orderOptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderOptions and returns the data updated in the database.
     * @param {orderOptionsUpdateManyAndReturnArgs} args - Arguments to update many OrderOptions.
     * @example
     * // Update many OrderOptions
     * const orderOptions = await prisma.orderOptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderOptions and only return the `id`
     * const orderOptionsWithIdOnly = await prisma.orderOptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderOptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, orderOptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderOptions.
     * @param {orderOptionsUpsertArgs} args - Arguments to update or create a OrderOptions.
     * @example
     * // Update or create a OrderOptions
     * const orderOptions = await prisma.orderOptions.upsert({
     *   create: {
     *     // ... data to create a OrderOptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderOptions we want to update
     *   }
     * })
     */
    upsert<T extends orderOptionsUpsertArgs>(args: SelectSubset<T, orderOptionsUpsertArgs<ExtArgs>>): Prisma__orderOptionsClient<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderOptionsCountArgs} args - Arguments to filter OrderOptions to count.
     * @example
     * // Count the number of OrderOptions
     * const count = await prisma.orderOptions.count({
     *   where: {
     *     // ... the filter for the OrderOptions we want to count
     *   }
     * })
    **/
    count<T extends orderOptionsCountArgs>(
      args?: Subset<T, orderOptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderOptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderOptionsAggregateArgs>(args: Subset<T, OrderOptionsAggregateArgs>): Prisma.PrismaPromise<GetOrderOptionsAggregateType<T>>

    /**
     * Group by OrderOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderOptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderOptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderOptionsGroupByArgs['orderBy'] }
        : { orderBy?: orderOptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderOptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderOptions model
   */
  readonly fields: orderOptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderOptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderOptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_order_options_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends optionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, optionsDefaultArgs<ExtArgs>>): Prisma__optionsClient<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_order_options_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    units<T extends unitsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unitsDefaultArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderOptions model
   */
  interface orderOptionsFieldRefs {
    readonly id: FieldRef<"orderOptions", 'String'>
    readonly order_id: FieldRef<"orderOptions", 'String'>
    readonly option_id: FieldRef<"orderOptions", 'String'>
    readonly unit_id: FieldRef<"orderOptions", 'String'>
    readonly quantity: FieldRef<"orderOptions", 'Decimal'>
    readonly price_per_base_unit: FieldRef<"orderOptions", 'Decimal'>
    readonly created_at: FieldRef<"orderOptions", 'DateTime'>
    readonly updated_at: FieldRef<"orderOptions", 'DateTime'>
    readonly deleted_at: FieldRef<"orderOptions", 'DateTime'>
    readonly created_by: FieldRef<"orderOptions", 'String'>
    readonly updated_by: FieldRef<"orderOptions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * orderOptions findUnique
   */
  export type orderOptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * Filter, which orderOptions to fetch.
     */
    where: orderOptionsWhereUniqueInput
  }

  /**
   * orderOptions findUniqueOrThrow
   */
  export type orderOptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * Filter, which orderOptions to fetch.
     */
    where: orderOptionsWhereUniqueInput
  }

  /**
   * orderOptions findFirst
   */
  export type orderOptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * Filter, which orderOptions to fetch.
     */
    where?: orderOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderOptions to fetch.
     */
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderOptions.
     */
    cursor?: orderOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderOptions.
     */
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * orderOptions findFirstOrThrow
   */
  export type orderOptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * Filter, which orderOptions to fetch.
     */
    where?: orderOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderOptions to fetch.
     */
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderOptions.
     */
    cursor?: orderOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderOptions.
     */
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * orderOptions findMany
   */
  export type orderOptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * Filter, which orderOptions to fetch.
     */
    where?: orderOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderOptions to fetch.
     */
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderOptions.
     */
    cursor?: orderOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderOptions.
     */
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * orderOptions create
   */
  export type orderOptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a orderOptions.
     */
    data: XOR<orderOptionsCreateInput, orderOptionsUncheckedCreateInput>
  }

  /**
   * orderOptions createMany
   */
  export type orderOptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderOptions.
     */
    data: orderOptionsCreateManyInput | orderOptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderOptions createManyAndReturn
   */
  export type orderOptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * The data used to create many orderOptions.
     */
    data: orderOptionsCreateManyInput | orderOptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderOptions update
   */
  export type orderOptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a orderOptions.
     */
    data: XOR<orderOptionsUpdateInput, orderOptionsUncheckedUpdateInput>
    /**
     * Choose, which orderOptions to update.
     */
    where: orderOptionsWhereUniqueInput
  }

  /**
   * orderOptions updateMany
   */
  export type orderOptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderOptions.
     */
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyInput>
    /**
     * Filter which orderOptions to update
     */
    where?: orderOptionsWhereInput
    /**
     * Limit how many orderOptions to update.
     */
    limit?: number
  }

  /**
   * orderOptions updateManyAndReturn
   */
  export type orderOptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * The data used to update orderOptions.
     */
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyInput>
    /**
     * Filter which orderOptions to update
     */
    where?: orderOptionsWhereInput
    /**
     * Limit how many orderOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderOptions upsert
   */
  export type orderOptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the orderOptions to update in case it exists.
     */
    where: orderOptionsWhereUniqueInput
    /**
     * In case the orderOptions found by the `where` argument doesn't exist, create a new orderOptions with this data.
     */
    create: XOR<orderOptionsCreateInput, orderOptionsUncheckedCreateInput>
    /**
     * In case the orderOptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderOptionsUpdateInput, orderOptionsUncheckedUpdateInput>
  }

  /**
   * orderOptions delete
   */
  export type orderOptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    /**
     * Filter which orderOptions to delete.
     */
    where: orderOptionsWhereUniqueInput
  }

  /**
   * orderOptions deleteMany
   */
  export type orderOptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderOptions to delete
     */
    where?: orderOptionsWhereInput
    /**
     * Limit how many orderOptions to delete.
     */
    limit?: number
  }

  /**
   * orderOptions without action
   */
  export type orderOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_number: number | null
    discount: Decimal | null
    cash_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    order_number: bigint | null
    discount: Decimal | null
    cash_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    order_number: bigint | null
    order_name: string | null
    created_at: Date | null
    status_changed_at: Date | null
    discount: Decimal | null
    cash_amount: Decimal | null
    created_by: string | null
    status_changed_by: string | null
    user_id: string | null
    status: $Enums.orderStatus | null
    payment_type: $Enums.paymentType | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    order_number: bigint | null
    order_name: string | null
    created_at: Date | null
    status_changed_at: Date | null
    discount: Decimal | null
    cash_amount: Decimal | null
    created_by: string | null
    status_changed_by: string | null
    user_id: string | null
    status: $Enums.orderStatus | null
    payment_type: $Enums.paymentType | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    order_number: number
    order_name: number
    created_at: number
    status_changed_at: number
    discount: number
    cash_amount: number
    created_by: number
    status_changed_by: number
    user_id: number
    status: number
    payment_type: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_number?: true
    discount?: true
    cash_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    order_number?: true
    discount?: true
    cash_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    order_number?: true
    order_name?: true
    created_at?: true
    status_changed_at?: true
    discount?: true
    cash_amount?: true
    created_by?: true
    status_changed_by?: true
    user_id?: true
    status?: true
    payment_type?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    order_number?: true
    order_name?: true
    created_at?: true
    status_changed_at?: true
    discount?: true
    cash_amount?: true
    created_by?: true
    status_changed_by?: true
    user_id?: true
    status?: true
    payment_type?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    order_number?: true
    order_name?: true
    created_at?: true
    status_changed_at?: true
    discount?: true
    cash_amount?: true
    created_by?: true
    status_changed_by?: true
    user_id?: true
    status?: true
    payment_type?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    order_number: bigint
    order_name: string | null
    created_at: Date
    status_changed_at: Date | null
    discount: Decimal
    cash_amount: Decimal
    created_by: string
    status_changed_by: string
    user_id: string
    status: $Enums.orderStatus
    payment_type: $Enums.paymentType
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_number?: boolean
    order_name?: boolean
    created_at?: boolean
    status_changed_at?: boolean
    discount?: boolean
    cash_amount?: boolean
    created_by?: boolean
    status_changed_by?: boolean
    user_id?: boolean
    status?: boolean
    payment_type?: boolean
    order_options?: boolean | orders$order_optionsArgs<ExtArgs>
    users_orders_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_status_changed_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_number?: boolean
    order_name?: boolean
    created_at?: boolean
    status_changed_at?: boolean
    discount?: boolean
    cash_amount?: boolean
    created_by?: boolean
    status_changed_by?: boolean
    user_id?: boolean
    status?: boolean
    payment_type?: boolean
    users_orders_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_status_changed_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_number?: boolean
    order_name?: boolean
    created_at?: boolean
    status_changed_at?: boolean
    discount?: boolean
    cash_amount?: boolean
    created_by?: boolean
    status_changed_by?: boolean
    user_id?: boolean
    status?: boolean
    payment_type?: boolean
    users_orders_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_status_changed_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    order_number?: boolean
    order_name?: boolean
    created_at?: boolean
    status_changed_at?: boolean
    discount?: boolean
    cash_amount?: boolean
    created_by?: boolean
    status_changed_by?: boolean
    user_id?: boolean
    status?: boolean
    payment_type?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_number" | "order_name" | "created_at" | "status_changed_at" | "discount" | "cash_amount" | "created_by" | "status_changed_by" | "user_id" | "status" | "payment_type", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_options?: boolean | orders$order_optionsArgs<ExtArgs>
    users_orders_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_status_changed_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_orders_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_status_changed_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_orders_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_status_changed_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_orders_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_options: Prisma.$orderOptionsPayload<ExtArgs>[]
      users_orders_created_byTousers: Prisma.$usersPayload<ExtArgs>
      users_orders_status_changed_byTousers: Prisma.$usersPayload<ExtArgs>
      users_orders_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_number: bigint
      order_name: string | null
      created_at: Date
      status_changed_at: Date | null
      discount: Prisma.Decimal
      cash_amount: Prisma.Decimal
      created_by: string
      status_changed_by: string
      user_id: string
      status: $Enums.orderStatus
      payment_type: $Enums.paymentType
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_options<T extends orders$order_optionsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_orders_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_orders_status_changed_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_orders_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'String'>
    readonly order_number: FieldRef<"orders", 'BigInt'>
    readonly order_name: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly status_changed_at: FieldRef<"orders", 'DateTime'>
    readonly discount: FieldRef<"orders", 'Decimal'>
    readonly cash_amount: FieldRef<"orders", 'Decimal'>
    readonly created_by: FieldRef<"orders", 'String'>
    readonly status_changed_by: FieldRef<"orders", 'String'>
    readonly user_id: FieldRef<"orders", 'String'>
    readonly status: FieldRef<"orders", 'orderStatus'>
    readonly payment_type: FieldRef<"orders", 'paymentType'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_options
   */
  export type orders$order_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    where?: orderOptionsWhereInput
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    cursor?: orderOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model refreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expired_at: Date | null
    created_at: Date | null
    device: string | null
    ipAddress: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expired_at: Date | null
    created_at: Date | null
    device: string | null
    ipAddress: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    user_id: number
    token_hash: number
    expired_at: number
    created_at: number
    device: number
    ipAddress: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expired_at?: true
    created_at?: true
    device?: true
    ipAddress?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expired_at?: true
    created_at?: true
    device?: true
    ipAddress?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expired_at?: true
    created_at?: true
    device?: true
    ipAddress?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refreshToken to aggregate.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type refreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refreshTokenWhereInput
    orderBy?: refreshTokenOrderByWithAggregationInput | refreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: refreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    user_id: string
    token_hash: string
    expired_at: Date
    created_at: Date
    device: string | null
    ipAddress: string | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends refreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type refreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expired_at?: boolean
    created_at?: boolean
    device?: boolean
    ipAddress?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type refreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expired_at?: boolean
    created_at?: boolean
    device?: boolean
    ipAddress?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type refreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expired_at?: boolean
    created_at?: boolean
    device?: boolean
    ipAddress?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type refreshTokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expired_at?: boolean
    created_at?: boolean
    device?: boolean
    ipAddress?: boolean
  }

  export type refreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_hash" | "expired_at" | "created_at" | "device" | "ipAddress", ExtArgs["result"]["refreshToken"]>
  export type refreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type refreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type refreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $refreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refreshToken"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token_hash: string
      expired_at: Date
      created_at: Date
      device: string | null
      ipAddress: string | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type refreshTokenGetPayload<S extends boolean | null | undefined | refreshTokenDefaultArgs> = $Result.GetResult<Prisma.$refreshTokenPayload, S>

  type refreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface refreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refreshToken'], meta: { name: 'refreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {refreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refreshTokenFindUniqueArgs>(args: SelectSubset<T, refreshTokenFindUniqueArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, refreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refreshTokenFindFirstArgs>(args?: SelectSubset<T, refreshTokenFindFirstArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, refreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends refreshTokenFindManyArgs>(args?: SelectSubset<T, refreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {refreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends refreshTokenCreateArgs>(args: SelectSubset<T, refreshTokenCreateArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {refreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refreshTokenCreateManyArgs>(args?: SelectSubset<T, refreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {refreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends refreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, refreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {refreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends refreshTokenDeleteArgs>(args: SelectSubset<T, refreshTokenDeleteArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {refreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refreshTokenUpdateArgs>(args: SelectSubset<T, refreshTokenUpdateArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {refreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refreshTokenDeleteManyArgs>(args?: SelectSubset<T, refreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refreshTokenUpdateManyArgs>(args: SelectSubset<T, refreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {refreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends refreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, refreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {refreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends refreshTokenUpsertArgs>(args: SelectSubset<T, refreshTokenUpsertArgs<ExtArgs>>): Prisma__refreshTokenClient<$Result.GetResult<Prisma.$refreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends refreshTokenCountArgs>(
      args?: Subset<T, refreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends refreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: refreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, refreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refreshToken model
   */
  readonly fields: refreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the refreshToken model
   */
  interface refreshTokenFieldRefs {
    readonly id: FieldRef<"refreshToken", 'String'>
    readonly user_id: FieldRef<"refreshToken", 'String'>
    readonly token_hash: FieldRef<"refreshToken", 'String'>
    readonly expired_at: FieldRef<"refreshToken", 'DateTime'>
    readonly created_at: FieldRef<"refreshToken", 'DateTime'>
    readonly device: FieldRef<"refreshToken", 'String'>
    readonly ipAddress: FieldRef<"refreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * refreshToken findUnique
   */
  export type refreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken findUniqueOrThrow
   */
  export type refreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken findFirst
   */
  export type refreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refreshTokens.
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * refreshToken findFirstOrThrow
   */
  export type refreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshToken to fetch.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refreshTokens.
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * refreshToken findMany
   */
  export type refreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which refreshTokens to fetch.
     */
    where?: refreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refreshTokens to fetch.
     */
    orderBy?: refreshTokenOrderByWithRelationInput | refreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refreshTokens.
     */
    cursor?: refreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * refreshToken create
   */
  export type refreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a refreshToken.
     */
    data: XOR<refreshTokenCreateInput, refreshTokenUncheckedCreateInput>
  }

  /**
   * refreshToken createMany
   */
  export type refreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refreshTokens.
     */
    data: refreshTokenCreateManyInput | refreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refreshToken createManyAndReturn
   */
  export type refreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many refreshTokens.
     */
    data: refreshTokenCreateManyInput | refreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * refreshToken update
   */
  export type refreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a refreshToken.
     */
    data: XOR<refreshTokenUpdateInput, refreshTokenUncheckedUpdateInput>
    /**
     * Choose, which refreshToken to update.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken updateMany
   */
  export type refreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refreshTokens.
     */
    data: XOR<refreshTokenUpdateManyMutationInput, refreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which refreshTokens to update
     */
    where?: refreshTokenWhereInput
    /**
     * Limit how many refreshTokens to update.
     */
    limit?: number
  }

  /**
   * refreshToken updateManyAndReturn
   */
  export type refreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update refreshTokens.
     */
    data: XOR<refreshTokenUpdateManyMutationInput, refreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which refreshTokens to update
     */
    where?: refreshTokenWhereInput
    /**
     * Limit how many refreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * refreshToken upsert
   */
  export type refreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the refreshToken to update in case it exists.
     */
    where: refreshTokenWhereUniqueInput
    /**
     * In case the refreshToken found by the `where` argument doesn't exist, create a new refreshToken with this data.
     */
    create: XOR<refreshTokenCreateInput, refreshTokenUncheckedCreateInput>
    /**
     * In case the refreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refreshTokenUpdateInput, refreshTokenUncheckedUpdateInput>
  }

  /**
   * refreshToken delete
   */
  export type refreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
    /**
     * Filter which refreshToken to delete.
     */
    where: refreshTokenWhereUniqueInput
  }

  /**
   * refreshToken deleteMany
   */
  export type refreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refreshTokens to delete
     */
    where?: refreshTokenWhereInput
    /**
     * Limit how many refreshTokens to delete.
     */
    limit?: number
  }

  /**
   * refreshToken without action
   */
  export type refreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refreshToken
     */
    select?: refreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refreshToken
     */
    omit?: refreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model unit_classes
   */

  export type AggregateUnit_classes = {
    _count: Unit_classesCountAggregateOutputType | null
    _min: Unit_classesMinAggregateOutputType | null
    _max: Unit_classesMaxAggregateOutputType | null
  }

  export type Unit_classesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Unit_classesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Unit_classesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Unit_classesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Unit_classesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Unit_classesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Unit_classesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unit_classes to aggregate.
     */
    where?: unit_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unit_classes to fetch.
     */
    orderBy?: unit_classesOrderByWithRelationInput | unit_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unit_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unit_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unit_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned unit_classes
    **/
    _count?: true | Unit_classesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Unit_classesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Unit_classesMaxAggregateInputType
  }

  export type GetUnit_classesAggregateType<T extends Unit_classesAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit_classes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit_classes[P]>
      : GetScalarType<T[P], AggregateUnit_classes[P]>
  }




  export type unit_classesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unit_classesWhereInput
    orderBy?: unit_classesOrderByWithAggregationInput | unit_classesOrderByWithAggregationInput[]
    by: Unit_classesScalarFieldEnum[] | Unit_classesScalarFieldEnum
    having?: unit_classesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Unit_classesCountAggregateInputType | true
    _min?: Unit_classesMinAggregateInputType
    _max?: Unit_classesMaxAggregateInputType
  }

  export type Unit_classesGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: Unit_classesCountAggregateOutputType | null
    _min: Unit_classesMinAggregateOutputType | null
    _max: Unit_classesMaxAggregateOutputType | null
  }

  type GetUnit_classesGroupByPayload<T extends unit_classesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Unit_classesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Unit_classesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Unit_classesGroupByOutputType[P]>
            : GetScalarType<T[P], Unit_classesGroupByOutputType[P]>
        }
      >
    >


  export type unit_classesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    units?: boolean | unit_classes$unitsArgs<ExtArgs>
    _count?: boolean | Unit_classesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit_classes"]>

  export type unit_classesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["unit_classes"]>

  export type unit_classesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["unit_classes"]>

  export type unit_classesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type unit_classesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["unit_classes"]>
  export type unit_classesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | unit_classes$unitsArgs<ExtArgs>
    _count?: boolean | Unit_classesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type unit_classesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type unit_classesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $unit_classesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "unit_classes"
    objects: {
      units: Prisma.$unitsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["unit_classes"]>
    composites: {}
  }

  type unit_classesGetPayload<S extends boolean | null | undefined | unit_classesDefaultArgs> = $Result.GetResult<Prisma.$unit_classesPayload, S>

  type unit_classesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unit_classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Unit_classesCountAggregateInputType | true
    }

  export interface unit_classesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['unit_classes'], meta: { name: 'unit_classes' } }
    /**
     * Find zero or one Unit_classes that matches the filter.
     * @param {unit_classesFindUniqueArgs} args - Arguments to find a Unit_classes
     * @example
     * // Get one Unit_classes
     * const unit_classes = await prisma.unit_classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unit_classesFindUniqueArgs>(args: SelectSubset<T, unit_classesFindUniqueArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit_classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unit_classesFindUniqueOrThrowArgs} args - Arguments to find a Unit_classes
     * @example
     * // Get one Unit_classes
     * const unit_classes = await prisma.unit_classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unit_classesFindUniqueOrThrowArgs>(args: SelectSubset<T, unit_classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unit_classesFindFirstArgs} args - Arguments to find a Unit_classes
     * @example
     * // Get one Unit_classes
     * const unit_classes = await prisma.unit_classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unit_classesFindFirstArgs>(args?: SelectSubset<T, unit_classesFindFirstArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit_classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unit_classesFindFirstOrThrowArgs} args - Arguments to find a Unit_classes
     * @example
     * // Get one Unit_classes
     * const unit_classes = await prisma.unit_classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unit_classesFindFirstOrThrowArgs>(args?: SelectSubset<T, unit_classesFindFirstOrThrowArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unit_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unit_classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unit_classes
     * const unit_classes = await prisma.unit_classes.findMany()
     * 
     * // Get first 10 Unit_classes
     * const unit_classes = await prisma.unit_classes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unit_classesWithIdOnly = await prisma.unit_classes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends unit_classesFindManyArgs>(args?: SelectSubset<T, unit_classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit_classes.
     * @param {unit_classesCreateArgs} args - Arguments to create a Unit_classes.
     * @example
     * // Create one Unit_classes
     * const Unit_classes = await prisma.unit_classes.create({
     *   data: {
     *     // ... data to create a Unit_classes
     *   }
     * })
     * 
     */
    create<T extends unit_classesCreateArgs>(args: SelectSubset<T, unit_classesCreateArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unit_classes.
     * @param {unit_classesCreateManyArgs} args - Arguments to create many Unit_classes.
     * @example
     * // Create many Unit_classes
     * const unit_classes = await prisma.unit_classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unit_classesCreateManyArgs>(args?: SelectSubset<T, unit_classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unit_classes and returns the data saved in the database.
     * @param {unit_classesCreateManyAndReturnArgs} args - Arguments to create many Unit_classes.
     * @example
     * // Create many Unit_classes
     * const unit_classes = await prisma.unit_classes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unit_classes and only return the `id`
     * const unit_classesWithIdOnly = await prisma.unit_classes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends unit_classesCreateManyAndReturnArgs>(args?: SelectSubset<T, unit_classesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit_classes.
     * @param {unit_classesDeleteArgs} args - Arguments to delete one Unit_classes.
     * @example
     * // Delete one Unit_classes
     * const Unit_classes = await prisma.unit_classes.delete({
     *   where: {
     *     // ... filter to delete one Unit_classes
     *   }
     * })
     * 
     */
    delete<T extends unit_classesDeleteArgs>(args: SelectSubset<T, unit_classesDeleteArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit_classes.
     * @param {unit_classesUpdateArgs} args - Arguments to update one Unit_classes.
     * @example
     * // Update one Unit_classes
     * const unit_classes = await prisma.unit_classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unit_classesUpdateArgs>(args: SelectSubset<T, unit_classesUpdateArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unit_classes.
     * @param {unit_classesDeleteManyArgs} args - Arguments to filter Unit_classes to delete.
     * @example
     * // Delete a few Unit_classes
     * const { count } = await prisma.unit_classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unit_classesDeleteManyArgs>(args?: SelectSubset<T, unit_classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unit_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unit_classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unit_classes
     * const unit_classes = await prisma.unit_classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unit_classesUpdateManyArgs>(args: SelectSubset<T, unit_classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unit_classes and returns the data updated in the database.
     * @param {unit_classesUpdateManyAndReturnArgs} args - Arguments to update many Unit_classes.
     * @example
     * // Update many Unit_classes
     * const unit_classes = await prisma.unit_classes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unit_classes and only return the `id`
     * const unit_classesWithIdOnly = await prisma.unit_classes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends unit_classesUpdateManyAndReturnArgs>(args: SelectSubset<T, unit_classesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit_classes.
     * @param {unit_classesUpsertArgs} args - Arguments to update or create a Unit_classes.
     * @example
     * // Update or create a Unit_classes
     * const unit_classes = await prisma.unit_classes.upsert({
     *   create: {
     *     // ... data to create a Unit_classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit_classes we want to update
     *   }
     * })
     */
    upsert<T extends unit_classesUpsertArgs>(args: SelectSubset<T, unit_classesUpsertArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unit_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unit_classesCountArgs} args - Arguments to filter Unit_classes to count.
     * @example
     * // Count the number of Unit_classes
     * const count = await prisma.unit_classes.count({
     *   where: {
     *     // ... the filter for the Unit_classes we want to count
     *   }
     * })
    **/
    count<T extends unit_classesCountArgs>(
      args?: Subset<T, unit_classesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Unit_classesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Unit_classesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Unit_classesAggregateArgs>(args: Subset<T, Unit_classesAggregateArgs>): Prisma.PrismaPromise<GetUnit_classesAggregateType<T>>

    /**
     * Group by Unit_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unit_classesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unit_classesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unit_classesGroupByArgs['orderBy'] }
        : { orderBy?: unit_classesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unit_classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnit_classesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the unit_classes model
   */
  readonly fields: unit_classesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for unit_classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unit_classesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends unit_classes$unitsArgs<ExtArgs> = {}>(args?: Subset<T, unit_classes$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the unit_classes model
   */
  interface unit_classesFieldRefs {
    readonly id: FieldRef<"unit_classes", 'String'>
    readonly name: FieldRef<"unit_classes", 'String'>
    readonly created_at: FieldRef<"unit_classes", 'DateTime'>
    readonly updated_at: FieldRef<"unit_classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * unit_classes findUnique
   */
  export type unit_classesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * Filter, which unit_classes to fetch.
     */
    where: unit_classesWhereUniqueInput
  }

  /**
   * unit_classes findUniqueOrThrow
   */
  export type unit_classesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * Filter, which unit_classes to fetch.
     */
    where: unit_classesWhereUniqueInput
  }

  /**
   * unit_classes findFirst
   */
  export type unit_classesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * Filter, which unit_classes to fetch.
     */
    where?: unit_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unit_classes to fetch.
     */
    orderBy?: unit_classesOrderByWithRelationInput | unit_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unit_classes.
     */
    cursor?: unit_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unit_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unit_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unit_classes.
     */
    distinct?: Unit_classesScalarFieldEnum | Unit_classesScalarFieldEnum[]
  }

  /**
   * unit_classes findFirstOrThrow
   */
  export type unit_classesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * Filter, which unit_classes to fetch.
     */
    where?: unit_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unit_classes to fetch.
     */
    orderBy?: unit_classesOrderByWithRelationInput | unit_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unit_classes.
     */
    cursor?: unit_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unit_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unit_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unit_classes.
     */
    distinct?: Unit_classesScalarFieldEnum | Unit_classesScalarFieldEnum[]
  }

  /**
   * unit_classes findMany
   */
  export type unit_classesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * Filter, which unit_classes to fetch.
     */
    where?: unit_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unit_classes to fetch.
     */
    orderBy?: unit_classesOrderByWithRelationInput | unit_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing unit_classes.
     */
    cursor?: unit_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unit_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unit_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unit_classes.
     */
    distinct?: Unit_classesScalarFieldEnum | Unit_classesScalarFieldEnum[]
  }

  /**
   * unit_classes create
   */
  export type unit_classesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * The data needed to create a unit_classes.
     */
    data: XOR<unit_classesCreateInput, unit_classesUncheckedCreateInput>
  }

  /**
   * unit_classes createMany
   */
  export type unit_classesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many unit_classes.
     */
    data: unit_classesCreateManyInput | unit_classesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * unit_classes createManyAndReturn
   */
  export type unit_classesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * The data used to create many unit_classes.
     */
    data: unit_classesCreateManyInput | unit_classesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * unit_classes update
   */
  export type unit_classesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * The data needed to update a unit_classes.
     */
    data: XOR<unit_classesUpdateInput, unit_classesUncheckedUpdateInput>
    /**
     * Choose, which unit_classes to update.
     */
    where: unit_classesWhereUniqueInput
  }

  /**
   * unit_classes updateMany
   */
  export type unit_classesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update unit_classes.
     */
    data: XOR<unit_classesUpdateManyMutationInput, unit_classesUncheckedUpdateManyInput>
    /**
     * Filter which unit_classes to update
     */
    where?: unit_classesWhereInput
    /**
     * Limit how many unit_classes to update.
     */
    limit?: number
  }

  /**
   * unit_classes updateManyAndReturn
   */
  export type unit_classesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * The data used to update unit_classes.
     */
    data: XOR<unit_classesUpdateManyMutationInput, unit_classesUncheckedUpdateManyInput>
    /**
     * Filter which unit_classes to update
     */
    where?: unit_classesWhereInput
    /**
     * Limit how many unit_classes to update.
     */
    limit?: number
  }

  /**
   * unit_classes upsert
   */
  export type unit_classesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * The filter to search for the unit_classes to update in case it exists.
     */
    where: unit_classesWhereUniqueInput
    /**
     * In case the unit_classes found by the `where` argument doesn't exist, create a new unit_classes with this data.
     */
    create: XOR<unit_classesCreateInput, unit_classesUncheckedCreateInput>
    /**
     * In case the unit_classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unit_classesUpdateInput, unit_classesUncheckedUpdateInput>
  }

  /**
   * unit_classes delete
   */
  export type unit_classesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
    /**
     * Filter which unit_classes to delete.
     */
    where: unit_classesWhereUniqueInput
  }

  /**
   * unit_classes deleteMany
   */
  export type unit_classesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unit_classes to delete
     */
    where?: unit_classesWhereInput
    /**
     * Limit how many unit_classes to delete.
     */
    limit?: number
  }

  /**
   * unit_classes.units
   */
  export type unit_classes$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    where?: unitsWhereInput
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    cursor?: unitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * unit_classes without action
   */
  export type unit_classesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unit_classes
     */
    select?: unit_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unit_classes
     */
    omit?: unit_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unit_classesInclude<ExtArgs> | null
  }


  /**
   * Model units
   */

  export type AggregateUnits = {
    _count: UnitsCountAggregateOutputType | null
    _avg: UnitsAvgAggregateOutputType | null
    _sum: UnitsSumAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  export type UnitsAvgAggregateOutputType = {
    to_base_factor: Decimal | null
  }

  export type UnitsSumAggregateOutputType = {
    to_base_factor: Decimal | null
  }

  export type UnitsMinAggregateOutputType = {
    id: string | null
    name: string | null
    symbol: string | null
    class_id: string | null
    to_base_factor: Decimal | null
    is_base: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UnitsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    symbol: string | null
    class_id: string | null
    to_base_factor: Decimal | null
    is_base: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UnitsCountAggregateOutputType = {
    id: number
    name: number
    symbol: number
    class_id: number
    to_base_factor: number
    is_base: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UnitsAvgAggregateInputType = {
    to_base_factor?: true
  }

  export type UnitsSumAggregateInputType = {
    to_base_factor?: true
  }

  export type UnitsMinAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    class_id?: true
    to_base_factor?: true
    is_base?: true
    created_at?: true
    updated_at?: true
  }

  export type UnitsMaxAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    class_id?: true
    to_base_factor?: true
    is_base?: true
    created_at?: true
    updated_at?: true
  }

  export type UnitsCountAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    class_id?: true
    to_base_factor?: true
    is_base?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UnitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to aggregate.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned units
    **/
    _count?: true | UnitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitsMaxAggregateInputType
  }

  export type GetUnitsAggregateType<T extends UnitsAggregateArgs> = {
        [P in keyof T & keyof AggregateUnits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnits[P]>
      : GetScalarType<T[P], AggregateUnits[P]>
  }




  export type unitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unitsWhereInput
    orderBy?: unitsOrderByWithAggregationInput | unitsOrderByWithAggregationInput[]
    by: UnitsScalarFieldEnum[] | UnitsScalarFieldEnum
    having?: unitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitsCountAggregateInputType | true
    _avg?: UnitsAvgAggregateInputType
    _sum?: UnitsSumAggregateInputType
    _min?: UnitsMinAggregateInputType
    _max?: UnitsMaxAggregateInputType
  }

  export type UnitsGroupByOutputType = {
    id: string
    name: string
    symbol: string
    class_id: string
    to_base_factor: Decimal
    is_base: boolean
    created_at: Date
    updated_at: Date
    _count: UnitsCountAggregateOutputType | null
    _avg: UnitsAvgAggregateOutputType | null
    _sum: UnitsSumAggregateOutputType | null
    _min: UnitsMinAggregateOutputType | null
    _max: UnitsMaxAggregateOutputType | null
  }

  type GetUnitsGroupByPayload<T extends unitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitsGroupByOutputType[P]>
            : GetScalarType<T[P], UnitsGroupByOutputType[P]>
        }
      >
    >


  export type unitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    class_id?: boolean
    to_base_factor?: boolean
    is_base?: boolean
    created_at?: boolean
    updated_at?: boolean
    unit_class?: boolean | unit_classesDefaultArgs<ExtArgs>
    options?: boolean | units$optionsArgs<ExtArgs>
    order_options?: boolean | units$order_optionsArgs<ExtArgs>
    _count?: boolean | UnitsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units"]>

  export type unitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    class_id?: boolean
    to_base_factor?: boolean
    is_base?: boolean
    created_at?: boolean
    updated_at?: boolean
    unit_class?: boolean | unit_classesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units"]>

  export type unitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    class_id?: boolean
    to_base_factor?: boolean
    is_base?: boolean
    created_at?: boolean
    updated_at?: boolean
    unit_class?: boolean | unit_classesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["units"]>

  export type unitsSelectScalar = {
    id?: boolean
    name?: boolean
    symbol?: boolean
    class_id?: boolean
    to_base_factor?: boolean
    is_base?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type unitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "symbol" | "class_id" | "to_base_factor" | "is_base" | "created_at" | "updated_at", ExtArgs["result"]["units"]>
  export type unitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit_class?: boolean | unit_classesDefaultArgs<ExtArgs>
    options?: boolean | units$optionsArgs<ExtArgs>
    order_options?: boolean | units$order_optionsArgs<ExtArgs>
    _count?: boolean | UnitsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type unitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit_class?: boolean | unit_classesDefaultArgs<ExtArgs>
  }
  export type unitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit_class?: boolean | unit_classesDefaultArgs<ExtArgs>
  }

  export type $unitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "units"
    objects: {
      unit_class: Prisma.$unit_classesPayload<ExtArgs>
      options: Prisma.$optionsPayload<ExtArgs>[]
      order_options: Prisma.$orderOptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      symbol: string
      class_id: string
      to_base_factor: Prisma.Decimal
      is_base: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["units"]>
    composites: {}
  }

  type unitsGetPayload<S extends boolean | null | undefined | unitsDefaultArgs> = $Result.GetResult<Prisma.$unitsPayload, S>

  type unitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitsCountAggregateInputType | true
    }

  export interface unitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['units'], meta: { name: 'units' } }
    /**
     * Find zero or one Units that matches the filter.
     * @param {unitsFindUniqueArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unitsFindUniqueArgs>(args: SelectSubset<T, unitsFindUniqueArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Units that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unitsFindUniqueOrThrowArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unitsFindUniqueOrThrowArgs>(args: SelectSubset<T, unitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unitsFindFirstArgs>(args?: SelectSubset<T, unitsFindFirstArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Units that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindFirstOrThrowArgs} args - Arguments to find a Units
     * @example
     * // Get one Units
     * const units = await prisma.units.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unitsFindFirstOrThrowArgs>(args?: SelectSubset<T, unitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.units.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.units.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitsWithIdOnly = await prisma.units.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends unitsFindManyArgs>(args?: SelectSubset<T, unitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Units.
     * @param {unitsCreateArgs} args - Arguments to create a Units.
     * @example
     * // Create one Units
     * const Units = await prisma.units.create({
     *   data: {
     *     // ... data to create a Units
     *   }
     * })
     * 
     */
    create<T extends unitsCreateArgs>(args: SelectSubset<T, unitsCreateArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {unitsCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const units = await prisma.units.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unitsCreateManyArgs>(args?: SelectSubset<T, unitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {unitsCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const units = await prisma.units.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitsWithIdOnly = await prisma.units.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends unitsCreateManyAndReturnArgs>(args?: SelectSubset<T, unitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Units.
     * @param {unitsDeleteArgs} args - Arguments to delete one Units.
     * @example
     * // Delete one Units
     * const Units = await prisma.units.delete({
     *   where: {
     *     // ... filter to delete one Units
     *   }
     * })
     * 
     */
    delete<T extends unitsDeleteArgs>(args: SelectSubset<T, unitsDeleteArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Units.
     * @param {unitsUpdateArgs} args - Arguments to update one Units.
     * @example
     * // Update one Units
     * const units = await prisma.units.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unitsUpdateArgs>(args: SelectSubset<T, unitsUpdateArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {unitsDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.units.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unitsDeleteManyArgs>(args?: SelectSubset<T, unitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unitsUpdateManyArgs>(args: SelectSubset<T, unitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {unitsUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const units = await prisma.units.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitsWithIdOnly = await prisma.units.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends unitsUpdateManyAndReturnArgs>(args: SelectSubset<T, unitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Units.
     * @param {unitsUpsertArgs} args - Arguments to update or create a Units.
     * @example
     * // Update or create a Units
     * const units = await prisma.units.upsert({
     *   create: {
     *     // ... data to create a Units
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Units we want to update
     *   }
     * })
     */
    upsert<T extends unitsUpsertArgs>(args: SelectSubset<T, unitsUpsertArgs<ExtArgs>>): Prisma__unitsClient<$Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.units.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends unitsCountArgs>(
      args?: Subset<T, unitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitsAggregateArgs>(args: Subset<T, UnitsAggregateArgs>): Prisma.PrismaPromise<GetUnitsAggregateType<T>>

    /**
     * Group by Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unitsGroupByArgs['orderBy'] }
        : { orderBy?: unitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the units model
   */
  readonly fields: unitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for units.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit_class<T extends unit_classesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unit_classesDefaultArgs<ExtArgs>>): Prisma__unit_classesClient<$Result.GetResult<Prisma.$unit_classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends units$optionsArgs<ExtArgs> = {}>(args?: Subset<T, units$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_options<T extends units$order_optionsArgs<ExtArgs> = {}>(args?: Subset<T, units$order_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderOptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the units model
   */
  interface unitsFieldRefs {
    readonly id: FieldRef<"units", 'String'>
    readonly name: FieldRef<"units", 'String'>
    readonly symbol: FieldRef<"units", 'String'>
    readonly class_id: FieldRef<"units", 'String'>
    readonly to_base_factor: FieldRef<"units", 'Decimal'>
    readonly is_base: FieldRef<"units", 'Boolean'>
    readonly created_at: FieldRef<"units", 'DateTime'>
    readonly updated_at: FieldRef<"units", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * units findUnique
   */
  export type unitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units findUniqueOrThrow
   */
  export type unitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units findFirst
   */
  export type unitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units findFirstOrThrow
   */
  export type unitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units findMany
   */
  export type unitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter, which units to fetch.
     */
    where?: unitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of units to fetch.
     */
    orderBy?: unitsOrderByWithRelationInput | unitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing units.
     */
    cursor?: unitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of units.
     */
    distinct?: UnitsScalarFieldEnum | UnitsScalarFieldEnum[]
  }

  /**
   * units create
   */
  export type unitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The data needed to create a units.
     */
    data: XOR<unitsCreateInput, unitsUncheckedCreateInput>
  }

  /**
   * units createMany
   */
  export type unitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many units.
     */
    data: unitsCreateManyInput | unitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * units createManyAndReturn
   */
  export type unitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * The data used to create many units.
     */
    data: unitsCreateManyInput | unitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * units update
   */
  export type unitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The data needed to update a units.
     */
    data: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
    /**
     * Choose, which units to update.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units updateMany
   */
  export type unitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update units.
     */
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
  }

  /**
   * units updateManyAndReturn
   */
  export type unitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * The data used to update units.
     */
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyInput>
    /**
     * Filter which units to update
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * units upsert
   */
  export type unitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * The filter to search for the units to update in case it exists.
     */
    where: unitsWhereUniqueInput
    /**
     * In case the units found by the `where` argument doesn't exist, create a new units with this data.
     */
    create: XOR<unitsCreateInput, unitsUncheckedCreateInput>
    /**
     * In case the units was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unitsUpdateInput, unitsUncheckedUpdateInput>
  }

  /**
   * units delete
   */
  export type unitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
    /**
     * Filter which units to delete.
     */
    where: unitsWhereUniqueInput
  }

  /**
   * units deleteMany
   */
  export type unitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which units to delete
     */
    where?: unitsWhereInput
    /**
     * Limit how many units to delete.
     */
    limit?: number
  }

  /**
   * units.options
   */
  export type units$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the options
     */
    select?: optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the options
     */
    omit?: optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: optionsInclude<ExtArgs> | null
    where?: optionsWhereInput
    orderBy?: optionsOrderByWithRelationInput | optionsOrderByWithRelationInput[]
    cursor?: optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionsScalarFieldEnum | OptionsScalarFieldEnum[]
  }

  /**
   * units.order_options
   */
  export type units$order_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderOptions
     */
    select?: orderOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderOptions
     */
    omit?: orderOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderOptionsInclude<ExtArgs> | null
    where?: orderOptionsWhereInput
    orderBy?: orderOptionsOrderByWithRelationInput | orderOptionsOrderByWithRelationInput[]
    cursor?: orderOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOptionsScalarFieldEnum | OrderOptionsScalarFieldEnum[]
  }

  /**
   * units without action
   */
  export type unitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the units
     */
    select?: unitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the units
     */
    omit?: unitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unitsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    email: 'email',
    business_name: 'business_name',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    parent_id: 'parent_id',
    name: 'name',
    image_url: 'image_url',
    user_id: 'user_id',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image_url: 'image_url',
    cat_id: 'cat_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    type: 'type'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const OptionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price_per_base_unit: 'price_per_base_unit',
    unit_id: 'unit_id',
    item_id: 'item_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    currency: 'currency'
  };

  export type OptionsScalarFieldEnum = (typeof OptionsScalarFieldEnum)[keyof typeof OptionsScalarFieldEnum]


  export const OrderOptionsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    option_id: 'option_id',
    unit_id: 'unit_id',
    quantity: 'quantity',
    price_per_base_unit: 'price_per_base_unit',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type OrderOptionsScalarFieldEnum = (typeof OrderOptionsScalarFieldEnum)[keyof typeof OrderOptionsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    order_number: 'order_number',
    order_name: 'order_name',
    created_at: 'created_at',
    status_changed_at: 'status_changed_at',
    discount: 'discount',
    cash_amount: 'cash_amount',
    created_by: 'created_by',
    status_changed_by: 'status_changed_by',
    user_id: 'user_id',
    status: 'status',
    payment_type: 'payment_type'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expired_at: 'expired_at',
    created_at: 'created_at',
    device: 'device',
    ipAddress: 'ipAddress'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const Unit_classesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Unit_classesScalarFieldEnum = (typeof Unit_classesScalarFieldEnum)[keyof typeof Unit_classesScalarFieldEnum]


  export const UnitsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symbol: 'symbol',
    class_id: 'class_id',
    to_base_factor: 'to_base_factor',
    is_base: 'is_base',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UnitsScalarFieldEnum = (typeof UnitsScalarFieldEnum)[keyof typeof UnitsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'itemType'
   */
  export type EnumitemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'itemType'>
    


  /**
   * Reference to a field of type 'itemType[]'
   */
  export type ListEnumitemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'itemType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'currencyType'
   */
  export type EnumcurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'currencyType'>
    


  /**
   * Reference to a field of type 'currencyType[]'
   */
  export type ListEnumcurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'currencyType[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'orderStatus'
   */
  export type EnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus'>
    


  /**
   * Reference to a field of type 'orderStatus[]'
   */
  export type ListEnumorderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orderStatus[]'>
    


  /**
   * Reference to a field of type 'paymentType'
   */
  export type EnumpaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentType'>
    


  /**
   * Reference to a field of type 'paymentType[]'
   */
  export type ListEnumpaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    name?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    business_name?: StringNullableFilter<"users"> | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    categories_categories_created_byTousers?: CategoriesListRelationFilter
    categories_categories_updated_byTousers?: CategoriesListRelationFilter
    categories_categories_user_idTousers?: CategoriesListRelationFilter
    items_items_created_byTousers?: ItemsListRelationFilter
    items_items_updated_byTousers?: ItemsListRelationFilter
    options_options_created_byTousers?: OptionsListRelationFilter
    options_options_updated_byTousers?: OptionsListRelationFilter
    order_options_order_options_created_byTousers?: OrderOptionsListRelationFilter
    order_options_order_options_updated_byTousers?: OrderOptionsListRelationFilter
    orders_orders_created_byTousers?: OrdersListRelationFilter
    orders_orders_status_changed_byTousers?: OrdersListRelationFilter
    orders_orders_user_idTousers?: OrdersListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    business_name?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categories_categories_created_byTousers?: categoriesOrderByRelationAggregateInput
    categories_categories_updated_byTousers?: categoriesOrderByRelationAggregateInput
    categories_categories_user_idTousers?: categoriesOrderByRelationAggregateInput
    items_items_created_byTousers?: itemsOrderByRelationAggregateInput
    items_items_updated_byTousers?: itemsOrderByRelationAggregateInput
    options_options_created_byTousers?: optionsOrderByRelationAggregateInput
    options_options_updated_byTousers?: optionsOrderByRelationAggregateInput
    order_options_order_options_created_byTousers?: orderOptionsOrderByRelationAggregateInput
    order_options_order_options_updated_byTousers?: orderOptionsOrderByRelationAggregateInput
    orders_orders_created_byTousers?: ordersOrderByRelationAggregateInput
    orders_orders_status_changed_byTousers?: ordersOrderByRelationAggregateInput
    orders_orders_user_idTousers?: ordersOrderByRelationAggregateInput
    refreshTokens?: refreshTokenOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    business_name?: StringNullableFilter<"users"> | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    categories_categories_created_byTousers?: CategoriesListRelationFilter
    categories_categories_updated_byTousers?: CategoriesListRelationFilter
    categories_categories_user_idTousers?: CategoriesListRelationFilter
    items_items_created_byTousers?: ItemsListRelationFilter
    items_items_updated_byTousers?: ItemsListRelationFilter
    options_options_created_byTousers?: OptionsListRelationFilter
    options_options_updated_byTousers?: OptionsListRelationFilter
    order_options_order_options_created_byTousers?: OrderOptionsListRelationFilter
    order_options_order_options_updated_byTousers?: OrderOptionsListRelationFilter
    orders_orders_created_byTousers?: OrdersListRelationFilter
    orders_orders_status_changed_byTousers?: OrdersListRelationFilter
    orders_orders_user_idTousers?: OrdersListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    business_name?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    business_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: UuidFilter<"categories"> | string
    parent_id?: UuidNullableFilter<"categories"> | string | null
    name?: StringFilter<"categories"> | string
    image_url?: StringNullableFilter<"categories"> | string | null
    user_id?: UuidFilter<"categories"> | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    created_by?: UuidFilter<"categories"> | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    updated_by?: UuidFilter<"categories"> | string
    deleted_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    users_categories_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    other_categories?: CategoriesListRelationFilter
    users_categories_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_categories_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    items?: ItemsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    users_categories_created_byTousers?: usersOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    other_categories?: categoriesOrderByRelationAggregateInput
    users_categories_updated_byTousers?: usersOrderByWithRelationInput
    users_categories_user_idTousers?: usersOrderByWithRelationInput
    items?: itemsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_name?: categoriesUser_idNameCompoundUniqueInput
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    parent_id?: UuidNullableFilter<"categories"> | string | null
    name?: StringFilter<"categories"> | string
    image_url?: StringNullableFilter<"categories"> | string | null
    user_id?: UuidFilter<"categories"> | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    created_by?: UuidFilter<"categories"> | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    updated_by?: UuidFilter<"categories"> | string
    deleted_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    users_categories_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    other_categories?: CategoriesListRelationFilter
    users_categories_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_categories_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    items?: ItemsListRelationFilter
  }, "id" | "user_id_name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"categories"> | string
    parent_id?: UuidNullableWithAggregatesFilter<"categories"> | string | null
    name?: StringWithAggregatesFilter<"categories"> | string
    image_url?: StringNullableWithAggregatesFilter<"categories"> | string | null
    user_id?: UuidWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    created_by?: UuidWithAggregatesFilter<"categories"> | string
    updated_at?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    updated_by?: UuidWithAggregatesFilter<"categories"> | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type itemsWhereInput = {
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    id?: UuidFilter<"items"> | string
    name?: StringFilter<"items"> | string
    image_url?: StringNullableFilter<"items"> | string | null
    cat_id?: UuidFilter<"items"> | string
    created_at?: DateTimeFilter<"items"> | Date | string
    updated_at?: DateTimeFilter<"items"> | Date | string
    deleted_at?: DateTimeNullableFilter<"items"> | Date | string | null
    created_by?: UuidFilter<"items"> | string
    updated_by?: UuidFilter<"items"> | string
    type?: EnumitemTypeFilter<"items"> | $Enums.itemType
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    users_items_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_items_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    options?: OptionsListRelationFilter
  }

  export type itemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    cat_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    type?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    users_items_created_byTousers?: usersOrderByWithRelationInput
    users_items_updated_byTousers?: usersOrderByWithRelationInput
    options?: optionsOrderByRelationAggregateInput
  }

  export type itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: itemsWhereInput | itemsWhereInput[]
    OR?: itemsWhereInput[]
    NOT?: itemsWhereInput | itemsWhereInput[]
    name?: StringFilter<"items"> | string
    image_url?: StringNullableFilter<"items"> | string | null
    cat_id?: UuidFilter<"items"> | string
    created_at?: DateTimeFilter<"items"> | Date | string
    updated_at?: DateTimeFilter<"items"> | Date | string
    deleted_at?: DateTimeNullableFilter<"items"> | Date | string | null
    created_by?: UuidFilter<"items"> | string
    updated_by?: UuidFilter<"items"> | string
    type?: EnumitemTypeFilter<"items"> | $Enums.itemType
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    users_items_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_items_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    options?: OptionsListRelationFilter
  }, "id">

  export type itemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    cat_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    type?: SortOrder
    _count?: itemsCountOrderByAggregateInput
    _max?: itemsMaxOrderByAggregateInput
    _min?: itemsMinOrderByAggregateInput
  }

  export type itemsScalarWhereWithAggregatesInput = {
    AND?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    OR?: itemsScalarWhereWithAggregatesInput[]
    NOT?: itemsScalarWhereWithAggregatesInput | itemsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"items"> | string
    name?: StringWithAggregatesFilter<"items"> | string
    image_url?: StringNullableWithAggregatesFilter<"items"> | string | null
    cat_id?: UuidWithAggregatesFilter<"items"> | string
    created_at?: DateTimeWithAggregatesFilter<"items"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"items"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"items"> | Date | string | null
    created_by?: UuidWithAggregatesFilter<"items"> | string
    updated_by?: UuidWithAggregatesFilter<"items"> | string
    type?: EnumitemTypeWithAggregatesFilter<"items"> | $Enums.itemType
  }

  export type optionsWhereInput = {
    AND?: optionsWhereInput | optionsWhereInput[]
    OR?: optionsWhereInput[]
    NOT?: optionsWhereInput | optionsWhereInput[]
    id?: UuidFilter<"options"> | string
    name?: StringFilter<"options"> | string
    price_per_base_unit?: DecimalFilter<"options"> | Decimal | DecimalJsLike | number | string
    unit_id?: UuidFilter<"options"> | string
    item_id?: UuidFilter<"options"> | string
    created_at?: DateTimeFilter<"options"> | Date | string
    updated_at?: DateTimeFilter<"options"> | Date | string
    deleted_at?: DateTimeNullableFilter<"options"> | Date | string | null
    created_by?: UuidFilter<"options"> | string
    updated_by?: UuidFilter<"options"> | string
    currency?: EnumcurrencyTypeFilter<"options"> | $Enums.currencyType
    users_options_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    items?: XOR<ItemsScalarRelationFilter, itemsWhereInput>
    users_options_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    order_options?: OrderOptionsListRelationFilter
    units?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
  }

  export type optionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price_per_base_unit?: SortOrder
    unit_id?: SortOrder
    item_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    currency?: SortOrder
    users_options_created_byTousers?: usersOrderByWithRelationInput
    items?: itemsOrderByWithRelationInput
    users_options_updated_byTousers?: usersOrderByWithRelationInput
    order_options?: orderOptionsOrderByRelationAggregateInput
    units?: unitsOrderByWithRelationInput
  }

  export type optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: optionsWhereInput | optionsWhereInput[]
    OR?: optionsWhereInput[]
    NOT?: optionsWhereInput | optionsWhereInput[]
    name?: StringFilter<"options"> | string
    price_per_base_unit?: DecimalFilter<"options"> | Decimal | DecimalJsLike | number | string
    unit_id?: UuidFilter<"options"> | string
    item_id?: UuidFilter<"options"> | string
    created_at?: DateTimeFilter<"options"> | Date | string
    updated_at?: DateTimeFilter<"options"> | Date | string
    deleted_at?: DateTimeNullableFilter<"options"> | Date | string | null
    created_by?: UuidFilter<"options"> | string
    updated_by?: UuidFilter<"options"> | string
    currency?: EnumcurrencyTypeFilter<"options"> | $Enums.currencyType
    users_options_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    items?: XOR<ItemsScalarRelationFilter, itemsWhereInput>
    users_options_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    order_options?: OrderOptionsListRelationFilter
    units?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
  }, "id">

  export type optionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price_per_base_unit?: SortOrder
    unit_id?: SortOrder
    item_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    currency?: SortOrder
    _count?: optionsCountOrderByAggregateInput
    _avg?: optionsAvgOrderByAggregateInput
    _max?: optionsMaxOrderByAggregateInput
    _min?: optionsMinOrderByAggregateInput
    _sum?: optionsSumOrderByAggregateInput
  }

  export type optionsScalarWhereWithAggregatesInput = {
    AND?: optionsScalarWhereWithAggregatesInput | optionsScalarWhereWithAggregatesInput[]
    OR?: optionsScalarWhereWithAggregatesInput[]
    NOT?: optionsScalarWhereWithAggregatesInput | optionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"options"> | string
    name?: StringWithAggregatesFilter<"options"> | string
    price_per_base_unit?: DecimalWithAggregatesFilter<"options"> | Decimal | DecimalJsLike | number | string
    unit_id?: UuidWithAggregatesFilter<"options"> | string
    item_id?: UuidWithAggregatesFilter<"options"> | string
    created_at?: DateTimeWithAggregatesFilter<"options"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"options"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"options"> | Date | string | null
    created_by?: UuidWithAggregatesFilter<"options"> | string
    updated_by?: UuidWithAggregatesFilter<"options"> | string
    currency?: EnumcurrencyTypeWithAggregatesFilter<"options"> | $Enums.currencyType
  }

  export type orderOptionsWhereInput = {
    AND?: orderOptionsWhereInput | orderOptionsWhereInput[]
    OR?: orderOptionsWhereInput[]
    NOT?: orderOptionsWhereInput | orderOptionsWhereInput[]
    id?: UuidFilter<"orderOptions"> | string
    order_id?: UuidFilter<"orderOptions"> | string
    option_id?: UuidFilter<"orderOptions"> | string
    unit_id?: UuidFilter<"orderOptions"> | string
    quantity?: DecimalFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"orderOptions"> | Date | string
    updated_at?: DateTimeFilter<"orderOptions"> | Date | string
    deleted_at?: DateTimeNullableFilter<"orderOptions"> | Date | string | null
    created_by?: UuidFilter<"orderOptions"> | string
    updated_by?: UuidFilter<"orderOptions"> | string
    users_order_options_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    options?: XOR<OptionsScalarRelationFilter, optionsWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    users_order_options_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    units?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
  }

  export type orderOptionsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    option_id?: SortOrder
    unit_id?: SortOrder
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    users_order_options_created_byTousers?: usersOrderByWithRelationInput
    options?: optionsOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
    users_order_options_updated_byTousers?: usersOrderByWithRelationInput
    units?: unitsOrderByWithRelationInput
  }

  export type orderOptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderOptionsWhereInput | orderOptionsWhereInput[]
    OR?: orderOptionsWhereInput[]
    NOT?: orderOptionsWhereInput | orderOptionsWhereInput[]
    order_id?: UuidFilter<"orderOptions"> | string
    option_id?: UuidFilter<"orderOptions"> | string
    unit_id?: UuidFilter<"orderOptions"> | string
    quantity?: DecimalFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"orderOptions"> | Date | string
    updated_at?: DateTimeFilter<"orderOptions"> | Date | string
    deleted_at?: DateTimeNullableFilter<"orderOptions"> | Date | string | null
    created_by?: UuidFilter<"orderOptions"> | string
    updated_by?: UuidFilter<"orderOptions"> | string
    users_order_options_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    options?: XOR<OptionsScalarRelationFilter, optionsWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    users_order_options_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    units?: XOR<UnitsScalarRelationFilter, unitsWhereInput>
  }, "id">

  export type orderOptionsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    option_id?: SortOrder
    unit_id?: SortOrder
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: orderOptionsCountOrderByAggregateInput
    _avg?: orderOptionsAvgOrderByAggregateInput
    _max?: orderOptionsMaxOrderByAggregateInput
    _min?: orderOptionsMinOrderByAggregateInput
    _sum?: orderOptionsSumOrderByAggregateInput
  }

  export type orderOptionsScalarWhereWithAggregatesInput = {
    AND?: orderOptionsScalarWhereWithAggregatesInput | orderOptionsScalarWhereWithAggregatesInput[]
    OR?: orderOptionsScalarWhereWithAggregatesInput[]
    NOT?: orderOptionsScalarWhereWithAggregatesInput | orderOptionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"orderOptions"> | string
    order_id?: UuidWithAggregatesFilter<"orderOptions"> | string
    option_id?: UuidWithAggregatesFilter<"orderOptions"> | string
    unit_id?: UuidWithAggregatesFilter<"orderOptions"> | string
    quantity?: DecimalWithAggregatesFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalWithAggregatesFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"orderOptions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"orderOptions"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"orderOptions"> | Date | string | null
    created_by?: UuidWithAggregatesFilter<"orderOptions"> | string
    updated_by?: UuidWithAggregatesFilter<"orderOptions"> | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: UuidFilter<"orders"> | string
    order_number?: BigIntFilter<"orders"> | bigint | number
    order_name?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    status_changed_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    discount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_by?: UuidFilter<"orders"> | string
    status_changed_by?: UuidFilter<"orders"> | string
    user_id?: UuidFilter<"orders"> | string
    status?: EnumorderStatusFilter<"orders"> | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFilter<"orders"> | $Enums.paymentType
    order_options?: OrderOptionsListRelationFilter
    users_orders_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_orders_status_changed_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_orders_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    order_number?: SortOrder
    order_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status_changed_at?: SortOrderInput | SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
    created_by?: SortOrder
    status_changed_by?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    order_options?: orderOptionsOrderByRelationAggregateInput
    users_orders_created_byTousers?: usersOrderByWithRelationInput
    users_orders_status_changed_byTousers?: usersOrderByWithRelationInput
    users_orders_user_idTousers?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_number?: bigint | number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_name?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    status_changed_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    discount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_by?: UuidFilter<"orders"> | string
    status_changed_by?: UuidFilter<"orders"> | string
    user_id?: UuidFilter<"orders"> | string
    status?: EnumorderStatusFilter<"orders"> | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFilter<"orders"> | $Enums.paymentType
    order_options?: OrderOptionsListRelationFilter
    users_orders_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_orders_status_changed_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_orders_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "order_number">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    order_number?: SortOrder
    order_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status_changed_at?: SortOrderInput | SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
    created_by?: SortOrder
    status_changed_by?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"orders"> | string
    order_number?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    order_name?: StringNullableWithAggregatesFilter<"orders"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    status_changed_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    discount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_by?: UuidWithAggregatesFilter<"orders"> | string
    status_changed_by?: UuidWithAggregatesFilter<"orders"> | string
    user_id?: UuidWithAggregatesFilter<"orders"> | string
    status?: EnumorderStatusWithAggregatesFilter<"orders"> | $Enums.orderStatus
    payment_type?: EnumpaymentTypeWithAggregatesFilter<"orders"> | $Enums.paymentType
  }

  export type refreshTokenWhereInput = {
    AND?: refreshTokenWhereInput | refreshTokenWhereInput[]
    OR?: refreshTokenWhereInput[]
    NOT?: refreshTokenWhereInput | refreshTokenWhereInput[]
    id?: StringFilter<"refreshToken"> | string
    user_id?: UuidFilter<"refreshToken"> | string
    token_hash?: StringFilter<"refreshToken"> | string
    expired_at?: DateTimeFilter<"refreshToken"> | Date | string
    created_at?: DateTimeFilter<"refreshToken"> | Date | string
    device?: StringNullableFilter<"refreshToken"> | string | null
    ipAddress?: StringNullableFilter<"refreshToken"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type refreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    device?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type refreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: refreshTokenWhereInput | refreshTokenWhereInput[]
    OR?: refreshTokenWhereInput[]
    NOT?: refreshTokenWhereInput | refreshTokenWhereInput[]
    user_id?: UuidFilter<"refreshToken"> | string
    token_hash?: StringFilter<"refreshToken"> | string
    expired_at?: DateTimeFilter<"refreshToken"> | Date | string
    created_at?: DateTimeFilter<"refreshToken"> | Date | string
    device?: StringNullableFilter<"refreshToken"> | string | null
    ipAddress?: StringNullableFilter<"refreshToken"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type refreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    device?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    _count?: refreshTokenCountOrderByAggregateInput
    _max?: refreshTokenMaxOrderByAggregateInput
    _min?: refreshTokenMinOrderByAggregateInput
  }

  export type refreshTokenScalarWhereWithAggregatesInput = {
    AND?: refreshTokenScalarWhereWithAggregatesInput | refreshTokenScalarWhereWithAggregatesInput[]
    OR?: refreshTokenScalarWhereWithAggregatesInput[]
    NOT?: refreshTokenScalarWhereWithAggregatesInput | refreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"refreshToken"> | string
    user_id?: UuidWithAggregatesFilter<"refreshToken"> | string
    token_hash?: StringWithAggregatesFilter<"refreshToken"> | string
    expired_at?: DateTimeWithAggregatesFilter<"refreshToken"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"refreshToken"> | Date | string
    device?: StringNullableWithAggregatesFilter<"refreshToken"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"refreshToken"> | string | null
  }

  export type unit_classesWhereInput = {
    AND?: unit_classesWhereInput | unit_classesWhereInput[]
    OR?: unit_classesWhereInput[]
    NOT?: unit_classesWhereInput | unit_classesWhereInput[]
    id?: UuidFilter<"unit_classes"> | string
    name?: StringFilter<"unit_classes"> | string
    created_at?: DateTimeFilter<"unit_classes"> | Date | string
    updated_at?: DateTimeFilter<"unit_classes"> | Date | string
    units?: UnitsListRelationFilter
  }

  export type unit_classesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    units?: unitsOrderByRelationAggregateInput
  }

  export type unit_classesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: unit_classesWhereInput | unit_classesWhereInput[]
    OR?: unit_classesWhereInput[]
    NOT?: unit_classesWhereInput | unit_classesWhereInput[]
    created_at?: DateTimeFilter<"unit_classes"> | Date | string
    updated_at?: DateTimeFilter<"unit_classes"> | Date | string
    units?: UnitsListRelationFilter
  }, "id" | "name">

  export type unit_classesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: unit_classesCountOrderByAggregateInput
    _max?: unit_classesMaxOrderByAggregateInput
    _min?: unit_classesMinOrderByAggregateInput
  }

  export type unit_classesScalarWhereWithAggregatesInput = {
    AND?: unit_classesScalarWhereWithAggregatesInput | unit_classesScalarWhereWithAggregatesInput[]
    OR?: unit_classesScalarWhereWithAggregatesInput[]
    NOT?: unit_classesScalarWhereWithAggregatesInput | unit_classesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"unit_classes"> | string
    name?: StringWithAggregatesFilter<"unit_classes"> | string
    created_at?: DateTimeWithAggregatesFilter<"unit_classes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"unit_classes"> | Date | string
  }

  export type unitsWhereInput = {
    AND?: unitsWhereInput | unitsWhereInput[]
    OR?: unitsWhereInput[]
    NOT?: unitsWhereInput | unitsWhereInput[]
    id?: UuidFilter<"units"> | string
    name?: StringFilter<"units"> | string
    symbol?: StringFilter<"units"> | string
    class_id?: UuidFilter<"units"> | string
    to_base_factor?: DecimalFilter<"units"> | Decimal | DecimalJsLike | number | string
    is_base?: BoolFilter<"units"> | boolean
    created_at?: DateTimeFilter<"units"> | Date | string
    updated_at?: DateTimeFilter<"units"> | Date | string
    unit_class?: XOR<Unit_classesScalarRelationFilter, unit_classesWhereInput>
    options?: OptionsListRelationFilter
    order_options?: OrderOptionsListRelationFilter
  }

  export type unitsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    class_id?: SortOrder
    to_base_factor?: SortOrder
    is_base?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    unit_class?: unit_classesOrderByWithRelationInput
    options?: optionsOrderByRelationAggregateInput
    order_options?: orderOptionsOrderByRelationAggregateInput
  }

  export type unitsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    class_id_name?: unitsClass_idNameCompoundUniqueInput
    AND?: unitsWhereInput | unitsWhereInput[]
    OR?: unitsWhereInput[]
    NOT?: unitsWhereInput | unitsWhereInput[]
    name?: StringFilter<"units"> | string
    symbol?: StringFilter<"units"> | string
    class_id?: UuidFilter<"units"> | string
    to_base_factor?: DecimalFilter<"units"> | Decimal | DecimalJsLike | number | string
    is_base?: BoolFilter<"units"> | boolean
    created_at?: DateTimeFilter<"units"> | Date | string
    updated_at?: DateTimeFilter<"units"> | Date | string
    unit_class?: XOR<Unit_classesScalarRelationFilter, unit_classesWhereInput>
    options?: OptionsListRelationFilter
    order_options?: OrderOptionsListRelationFilter
  }, "id" | "class_id_name">

  export type unitsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    class_id?: SortOrder
    to_base_factor?: SortOrder
    is_base?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: unitsCountOrderByAggregateInput
    _avg?: unitsAvgOrderByAggregateInput
    _max?: unitsMaxOrderByAggregateInput
    _min?: unitsMinOrderByAggregateInput
    _sum?: unitsSumOrderByAggregateInput
  }

  export type unitsScalarWhereWithAggregatesInput = {
    AND?: unitsScalarWhereWithAggregatesInput | unitsScalarWhereWithAggregatesInput[]
    OR?: unitsScalarWhereWithAggregatesInput[]
    NOT?: unitsScalarWhereWithAggregatesInput | unitsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"units"> | string
    name?: StringWithAggregatesFilter<"units"> | string
    symbol?: StringWithAggregatesFilter<"units"> | string
    class_id?: UuidWithAggregatesFilter<"units"> | string
    to_base_factor?: DecimalWithAggregatesFilter<"units"> | Decimal | DecimalJsLike | number | string
    is_base?: BoolWithAggregatesFilter<"units"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"units"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"units"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    users_categories_updated_byTousers: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    users_categories_user_idTousers: usersCreateNestedOneWithoutCategories_categories_user_idTousersInput
    items?: itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    items?: itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    users_categories_updated_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput
    users_categories_user_idTousers?: usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput
    items?: itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    items?: itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type itemsCreateInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.itemType
    categories: categoriesCreateNestedOneWithoutItemsInput
    users_items_created_byTousers: usersCreateNestedOneWithoutItems_items_created_byTousersInput
    users_items_updated_byTousers: usersCreateNestedOneWithoutItems_items_updated_byTousersInput
    options?: optionsCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    type: $Enums.itemType
    options?: optionsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    categories?: categoriesUpdateOneRequiredWithoutItemsNestedInput
    users_items_created_byTousers?: usersUpdateOneRequiredWithoutItems_items_created_byTousersNestedInput
    users_items_updated_byTousers?: usersUpdateOneRequiredWithoutItems_items_updated_byTousersNestedInput
    options?: optionsUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    options?: optionsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsCreateManyInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    type: $Enums.itemType
  }

  export type itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
  }

  export type itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
  }

  export type optionsCreateInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    currency?: $Enums.currencyType
    users_options_created_byTousers: usersCreateNestedOneWithoutOptions_options_created_byTousersInput
    items: itemsCreateNestedOneWithoutOptionsInput
    users_options_updated_byTousers: usersCreateNestedOneWithoutOptions_options_updated_byTousersInput
    order_options?: orderOptionsCreateNestedManyWithoutOptionsInput
    units: unitsCreateNestedOneWithoutOptionsInput
  }

  export type optionsUncheckedCreateInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type optionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    users_options_created_byTousers?: usersUpdateOneRequiredWithoutOptions_options_created_byTousersNestedInput
    items?: itemsUpdateOneRequiredWithoutOptionsNestedInput
    users_options_updated_byTousers?: usersUpdateOneRequiredWithoutOptions_options_updated_byTousersNestedInput
    order_options?: orderOptionsUpdateManyWithoutOptionsNestedInput
    units?: unitsUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type optionsCreateManyInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
  }

  export type optionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type optionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type orderOptionsCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_order_options_created_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_created_byTousersInput
    options: optionsCreateNestedOneWithoutOrder_optionsInput
    orders: ordersCreateNestedOneWithoutOrder_optionsInput
    users_order_options_updated_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_updated_byTousersInput
    units: unitsCreateNestedOneWithoutOrder_optionsInput
  }

  export type orderOptionsUncheckedCreateInput = {
    id?: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_order_options_created_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_created_byTousersNestedInput
    options?: optionsUpdateOneRequiredWithoutOrder_optionsNestedInput
    orders?: ordersUpdateOneRequiredWithoutOrder_optionsNestedInput
    users_order_options_updated_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_updated_byTousersNestedInput
    units?: unitsUpdateOneRequiredWithoutOrder_optionsNestedInput
  }

  export type orderOptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsCreateManyInput = {
    id?: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderOptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type ordersCreateInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsCreateNestedManyWithoutOrdersInput
    users_orders_created_byTousers: usersCreateNestedOneWithoutOrders_orders_created_byTousersInput
    users_orders_status_changed_byTousers: usersCreateNestedOneWithoutOrders_orders_status_changed_byTousersInput
    users_orders_user_idTousers: usersCreateNestedOneWithoutOrders_orders_user_idTousersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    status_changed_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUpdateManyWithoutOrdersNestedInput
    users_orders_created_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_created_byTousersNestedInput
    users_orders_status_changed_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_status_changed_byTousersNestedInput
    users_orders_user_idTousers?: usersUpdateOneRequiredWithoutOrders_orders_user_idTousersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    status_changed_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
  }

  export type ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
  }

  export type refreshTokenCreateInput = {
    id?: string
    token_hash: string
    expired_at: Date | string
    created_at?: Date | string
    device?: string | null
    ipAddress?: string | null
    user: usersCreateNestedOneWithoutRefreshTokensInput
  }

  export type refreshTokenUncheckedCreateInput = {
    id?: string
    user_id: string
    token_hash: string
    expired_at: Date | string
    created_at?: Date | string
    device?: string | null
    ipAddress?: string | null
  }

  export type refreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type refreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenCreateManyInput = {
    id?: string
    user_id: string
    token_hash: string
    expired_at: Date | string
    created_at?: Date | string
    device?: string | null
    ipAddress?: string | null
  }

  export type refreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type unit_classesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    units?: unitsCreateNestedManyWithoutUnit_classInput
  }

  export type unit_classesUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    units?: unitsUncheckedCreateNestedManyWithoutUnit_classInput
  }

  export type unit_classesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: unitsUpdateManyWithoutUnit_classNestedInput
  }

  export type unit_classesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: unitsUncheckedUpdateManyWithoutUnit_classNestedInput
  }

  export type unit_classesCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unit_classesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unit_classesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unitsCreateInput = {
    id?: string
    name: string
    symbol: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    unit_class: unit_classesCreateNestedOneWithoutUnitsInput
    options?: optionsCreateNestedManyWithoutUnitsInput
    order_options?: orderOptionsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateInput = {
    id?: string
    name: string
    symbol: string
    class_id: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    options?: optionsUncheckedCreateNestedManyWithoutUnitsInput
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit_class?: unit_classesUpdateOneRequiredWithoutUnitsNestedInput
    options?: optionsUpdateManyWithoutUnitsNestedInput
    order_options?: orderOptionsUpdateManyWithoutUnitsNestedInput
  }

  export type unitsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: optionsUncheckedUpdateManyWithoutUnitsNestedInput
    order_options?: orderOptionsUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type unitsCreateManyInput = {
    id?: string
    name: string
    symbol: string
    class_id: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unitsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unitsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type ItemsListRelationFilter = {
    every?: itemsWhereInput
    some?: itemsWhereInput
    none?: itemsWhereInput
  }

  export type OptionsListRelationFilter = {
    every?: optionsWhereInput
    some?: optionsWhereInput
    none?: optionsWhereInput
  }

  export type OrderOptionsListRelationFilter = {
    every?: orderOptionsWhereInput
    some?: orderOptionsWhereInput
    none?: orderOptionsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: refreshTokenWhereInput
    some?: refreshTokenWhereInput
    none?: refreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type optionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type refreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    business_name?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    business_name?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    business_name?: SortOrder
    deleted_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type categoriesUser_idNameCompoundUniqueInput = {
    user_id: string
    name: string
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumitemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.itemType | EnumitemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumitemTypeFilter<$PrismaModel> | $Enums.itemType
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type itemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    cat_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    type?: SortOrder
  }

  export type itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    cat_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    type?: SortOrder
  }

  export type itemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    cat_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    type?: SortOrder
  }

  export type EnumitemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.itemType | EnumitemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumitemTypeWithAggregatesFilter<$PrismaModel> | $Enums.itemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumitemTypeFilter<$PrismaModel>
    _max?: NestedEnumitemTypeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumcurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.currencyType | EnumcurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcurrencyTypeFilter<$PrismaModel> | $Enums.currencyType
  }

  export type ItemsScalarRelationFilter = {
    is?: itemsWhereInput
    isNot?: itemsWhereInput
  }

  export type UnitsScalarRelationFilter = {
    is?: unitsWhereInput
    isNot?: unitsWhereInput
  }

  export type optionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price_per_base_unit?: SortOrder
    unit_id?: SortOrder
    item_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    currency?: SortOrder
  }

  export type optionsAvgOrderByAggregateInput = {
    price_per_base_unit?: SortOrder
  }

  export type optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price_per_base_unit?: SortOrder
    unit_id?: SortOrder
    item_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    currency?: SortOrder
  }

  export type optionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price_per_base_unit?: SortOrder
    unit_id?: SortOrder
    item_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    currency?: SortOrder
  }

  export type optionsSumOrderByAggregateInput = {
    price_per_base_unit?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumcurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.currencyType | EnumcurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.currencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumcurrencyTypeFilter<$PrismaModel>
  }

  export type OptionsScalarRelationFilter = {
    is?: optionsWhereInput
    isNot?: optionsWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type orderOptionsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    option_id?: SortOrder
    unit_id?: SortOrder
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type orderOptionsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
  }

  export type orderOptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    option_id?: SortOrder
    unit_id?: SortOrder
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type orderOptionsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    option_id?: SortOrder
    unit_id?: SortOrder
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type orderOptionsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price_per_base_unit?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumorderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusFilter<$PrismaModel> | $Enums.orderStatus
  }

  export type EnumpaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentType | EnumpaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentTypeFilter<$PrismaModel> | $Enums.paymentType
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    order_number?: SortOrder
    order_name?: SortOrder
    created_at?: SortOrder
    status_changed_at?: SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
    created_by?: SortOrder
    status_changed_by?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_number?: SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    order_number?: SortOrder
    order_name?: SortOrder
    created_at?: SortOrder
    status_changed_at?: SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
    created_by?: SortOrder
    status_changed_by?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    order_number?: SortOrder
    order_name?: SortOrder
    created_at?: SortOrder
    status_changed_at?: SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
    created_by?: SortOrder
    status_changed_by?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    payment_type?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_number?: SortOrder
    discount?: SortOrder
    cash_amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumorderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusWithAggregatesFilter<$PrismaModel> | $Enums.orderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorderStatusFilter<$PrismaModel>
    _max?: NestedEnumorderStatusFilter<$PrismaModel>
  }

  export type EnumpaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentType | EnumpaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.paymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumpaymentTypeFilter<$PrismaModel>
  }

  export type refreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    device?: SortOrder
    ipAddress?: SortOrder
  }

  export type refreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    device?: SortOrder
    ipAddress?: SortOrder
  }

  export type refreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    device?: SortOrder
    ipAddress?: SortOrder
  }

  export type UnitsListRelationFilter = {
    every?: unitsWhereInput
    some?: unitsWhereInput
    none?: unitsWhereInput
  }

  export type unitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unit_classesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unit_classesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unit_classesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Unit_classesScalarRelationFilter = {
    is?: unit_classesWhereInput
    isNot?: unit_classesWhereInput
  }

  export type unitsClass_idNameCompoundUniqueInput = {
    class_id: string
    name: string
  }

  export type unitsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    class_id?: SortOrder
    to_base_factor?: SortOrder
    is_base?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unitsAvgOrderByAggregateInput = {
    to_base_factor?: SortOrder
  }

  export type unitsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    class_id?: SortOrder
    to_base_factor?: SortOrder
    is_base?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unitsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    class_id?: SortOrder
    to_base_factor?: SortOrder
    is_base?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type unitsSumOrderByAggregateInput = {
    to_base_factor?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput> | categoriesCreateWithoutUsers_categories_user_idTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput | categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_user_idTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type itemsCreateNestedManyWithoutUsers_items_created_byTousersInput = {
    create?: XOR<itemsCreateWithoutUsers_items_created_byTousersInput, itemsUncheckedCreateWithoutUsers_items_created_byTousersInput> | itemsCreateWithoutUsers_items_created_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_created_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_created_byTousersInput | itemsCreateOrConnectWithoutUsers_items_created_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_created_byTousersInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput = {
    create?: XOR<itemsCreateWithoutUsers_items_updated_byTousersInput, itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput> | itemsCreateWithoutUsers_items_updated_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput | itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_updated_byTousersInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type optionsCreateNestedManyWithoutUsers_options_created_byTousersInput = {
    create?: XOR<optionsCreateWithoutUsers_options_created_byTousersInput, optionsUncheckedCreateWithoutUsers_options_created_byTousersInput> | optionsCreateWithoutUsers_options_created_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_created_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_created_byTousersInput | optionsCreateOrConnectWithoutUsers_options_created_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_created_byTousersInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput = {
    create?: XOR<optionsCreateWithoutUsers_options_updated_byTousersInput, optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput> | optionsCreateWithoutUsers_options_updated_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput | optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_updated_byTousersInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_created_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_created_byTousersInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_updated_byTousersInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_created_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput> | ordersCreateWithoutUsers_orders_created_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_created_byTousersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput> | ordersCreateWithoutUsers_orders_status_changed_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_status_changed_byTousersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_user_idTousersInput, ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput> | ordersCreateWithoutUsers_orders_user_idTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput | ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput[]
    createMany?: ordersCreateManyUsers_orders_user_idTousersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type refreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput> | categoriesCreateWithoutUsers_categories_user_idTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput | categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_user_idTousersInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput = {
    create?: XOR<itemsCreateWithoutUsers_items_created_byTousersInput, itemsUncheckedCreateWithoutUsers_items_created_byTousersInput> | itemsCreateWithoutUsers_items_created_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_created_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_created_byTousersInput | itemsCreateOrConnectWithoutUsers_items_created_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_created_byTousersInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput = {
    create?: XOR<itemsCreateWithoutUsers_items_updated_byTousersInput, itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput> | itemsCreateWithoutUsers_items_updated_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput | itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_updated_byTousersInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput = {
    create?: XOR<optionsCreateWithoutUsers_options_created_byTousersInput, optionsUncheckedCreateWithoutUsers_options_created_byTousersInput> | optionsCreateWithoutUsers_options_created_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_created_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_created_byTousersInput | optionsCreateOrConnectWithoutUsers_options_created_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_created_byTousersInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput = {
    create?: XOR<optionsCreateWithoutUsers_options_updated_byTousersInput, optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput> | optionsCreateWithoutUsers_options_updated_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput | optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_updated_byTousersInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_created_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_created_byTousersInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_updated_byTousersInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_created_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput> | ordersCreateWithoutUsers_orders_created_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_created_byTousersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput> | ordersCreateWithoutUsers_orders_status_changed_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_status_changed_byTousersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_user_idTousersInput, ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput> | ordersCreateWithoutUsers_orders_user_idTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput | ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput[]
    createMany?: ordersCreateManyUsers_orders_user_idTousersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type refreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput> | categoriesCreateWithoutUsers_categories_user_idTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput | categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_user_idTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_user_idTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_user_idTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_user_idTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_user_idTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_user_idTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_user_idTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput = {
    create?: XOR<itemsCreateWithoutUsers_items_created_byTousersInput, itemsUncheckedCreateWithoutUsers_items_created_byTousersInput> | itemsCreateWithoutUsers_items_created_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_created_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_created_byTousersInput | itemsCreateOrConnectWithoutUsers_items_created_byTousersInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutUsers_items_created_byTousersInput | itemsUpsertWithWhereUniqueWithoutUsers_items_created_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_created_byTousersInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutUsers_items_created_byTousersInput | itemsUpdateWithWhereUniqueWithoutUsers_items_created_byTousersInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutUsers_items_created_byTousersInput | itemsUpdateManyWithWhereWithoutUsers_items_created_byTousersInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput = {
    create?: XOR<itemsCreateWithoutUsers_items_updated_byTousersInput, itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput> | itemsCreateWithoutUsers_items_updated_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput | itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutUsers_items_updated_byTousersInput | itemsUpsertWithWhereUniqueWithoutUsers_items_updated_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_updated_byTousersInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutUsers_items_updated_byTousersInput | itemsUpdateWithWhereUniqueWithoutUsers_items_updated_byTousersInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutUsers_items_updated_byTousersInput | itemsUpdateManyWithWhereWithoutUsers_items_updated_byTousersInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput = {
    create?: XOR<optionsCreateWithoutUsers_options_created_byTousersInput, optionsUncheckedCreateWithoutUsers_options_created_byTousersInput> | optionsCreateWithoutUsers_options_created_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_created_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_created_byTousersInput | optionsCreateOrConnectWithoutUsers_options_created_byTousersInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutUsers_options_created_byTousersInput | optionsUpsertWithWhereUniqueWithoutUsers_options_created_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_created_byTousersInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutUsers_options_created_byTousersInput | optionsUpdateWithWhereUniqueWithoutUsers_options_created_byTousersInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutUsers_options_created_byTousersInput | optionsUpdateManyWithWhereWithoutUsers_options_created_byTousersInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput = {
    create?: XOR<optionsCreateWithoutUsers_options_updated_byTousersInput, optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput> | optionsCreateWithoutUsers_options_updated_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput | optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutUsers_options_updated_byTousersInput | optionsUpsertWithWhereUniqueWithoutUsers_options_updated_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_updated_byTousersInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutUsers_options_updated_byTousersInput | optionsUpdateWithWhereUniqueWithoutUsers_options_updated_byTousersInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutUsers_options_updated_byTousersInput | optionsUpdateManyWithWhereWithoutUsers_options_updated_byTousersInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_created_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_created_byTousersInput | orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_created_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_created_byTousersInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_created_byTousersInput | orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_created_byTousersInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutUsers_order_options_created_byTousersInput | orderOptionsUpdateManyWithWhereWithoutUsers_order_options_created_byTousersInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput | orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_updated_byTousersInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput | orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutUsers_order_options_updated_byTousersInput | orderOptionsUpdateManyWithWhereWithoutUsers_order_options_updated_byTousersInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_created_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput> | ordersCreateWithoutUsers_orders_created_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsers_orders_created_byTousersInput | ordersUpsertWithWhereUniqueWithoutUsers_orders_created_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_created_byTousersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsers_orders_created_byTousersInput | ordersUpdateWithWhereUniqueWithoutUsers_orders_created_byTousersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsers_orders_created_byTousersInput | ordersUpdateManyWithWhereWithoutUsers_orders_created_byTousersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput> | ordersCreateWithoutUsers_orders_status_changed_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput | ordersUpsertWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_status_changed_byTousersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput | ordersUpdateWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsers_orders_status_changed_byTousersInput | ordersUpdateManyWithWhereWithoutUsers_orders_status_changed_byTousersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_user_idTousersInput, ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput> | ordersCreateWithoutUsers_orders_user_idTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput | ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsers_orders_user_idTousersInput | ordersUpsertWithWhereUniqueWithoutUsers_orders_user_idTousersInput[]
    createMany?: ordersCreateManyUsers_orders_user_idTousersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsers_orders_user_idTousersInput | ordersUpdateWithWhereUniqueWithoutUsers_orders_user_idTousersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsers_orders_user_idTousersInput | ordersUpdateManyWithWhereWithoutUsers_orders_user_idTousersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type refreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: refreshTokenUpsertWithWhereUniqueWithoutUserInput | refreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    set?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    disconnect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    delete?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    update?: refreshTokenUpdateWithWhereUniqueWithoutUserInput | refreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refreshTokenUpdateManyWithWhereWithoutUserInput | refreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput> | categoriesCreateWithoutUsers_categories_created_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_created_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput> | categoriesCreateWithoutUsers_categories_updated_byTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput | categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput = {
    create?: XOR<categoriesCreateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput> | categoriesCreateWithoutUsers_categories_user_idTousersInput[] | categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput | categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutUsers_categories_user_idTousersInput | categoriesUpsertWithWhereUniqueWithoutUsers_categories_user_idTousersInput[]
    createMany?: categoriesCreateManyUsers_categories_user_idTousersInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutUsers_categories_user_idTousersInput | categoriesUpdateWithWhereUniqueWithoutUsers_categories_user_idTousersInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutUsers_categories_user_idTousersInput | categoriesUpdateManyWithWhereWithoutUsers_categories_user_idTousersInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput = {
    create?: XOR<itemsCreateWithoutUsers_items_created_byTousersInput, itemsUncheckedCreateWithoutUsers_items_created_byTousersInput> | itemsCreateWithoutUsers_items_created_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_created_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_created_byTousersInput | itemsCreateOrConnectWithoutUsers_items_created_byTousersInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutUsers_items_created_byTousersInput | itemsUpsertWithWhereUniqueWithoutUsers_items_created_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_created_byTousersInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutUsers_items_created_byTousersInput | itemsUpdateWithWhereUniqueWithoutUsers_items_created_byTousersInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutUsers_items_created_byTousersInput | itemsUpdateManyWithWhereWithoutUsers_items_created_byTousersInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput = {
    create?: XOR<itemsCreateWithoutUsers_items_updated_byTousersInput, itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput> | itemsCreateWithoutUsers_items_updated_byTousersInput[] | itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput | itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutUsers_items_updated_byTousersInput | itemsUpsertWithWhereUniqueWithoutUsers_items_updated_byTousersInput[]
    createMany?: itemsCreateManyUsers_items_updated_byTousersInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutUsers_items_updated_byTousersInput | itemsUpdateWithWhereUniqueWithoutUsers_items_updated_byTousersInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutUsers_items_updated_byTousersInput | itemsUpdateManyWithWhereWithoutUsers_items_updated_byTousersInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput = {
    create?: XOR<optionsCreateWithoutUsers_options_created_byTousersInput, optionsUncheckedCreateWithoutUsers_options_created_byTousersInput> | optionsCreateWithoutUsers_options_created_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_created_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_created_byTousersInput | optionsCreateOrConnectWithoutUsers_options_created_byTousersInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutUsers_options_created_byTousersInput | optionsUpsertWithWhereUniqueWithoutUsers_options_created_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_created_byTousersInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutUsers_options_created_byTousersInput | optionsUpdateWithWhereUniqueWithoutUsers_options_created_byTousersInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutUsers_options_created_byTousersInput | optionsUpdateManyWithWhereWithoutUsers_options_created_byTousersInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput = {
    create?: XOR<optionsCreateWithoutUsers_options_updated_byTousersInput, optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput> | optionsCreateWithoutUsers_options_updated_byTousersInput[] | optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput | optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutUsers_options_updated_byTousersInput | optionsUpsertWithWhereUniqueWithoutUsers_options_updated_byTousersInput[]
    createMany?: optionsCreateManyUsers_options_updated_byTousersInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutUsers_options_updated_byTousersInput | optionsUpdateWithWhereUniqueWithoutUsers_options_updated_byTousersInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutUsers_options_updated_byTousersInput | optionsUpdateManyWithWhereWithoutUsers_options_updated_byTousersInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_created_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_created_byTousersInput | orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_created_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_created_byTousersInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_created_byTousersInput | orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_created_byTousersInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutUsers_order_options_created_byTousersInput | orderOptionsUpdateManyWithWhereWithoutUsers_order_options_created_byTousersInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput = {
    create?: XOR<orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput> | orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput[] | orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput | orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput | orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput[]
    createMany?: orderOptionsCreateManyUsers_order_options_updated_byTousersInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput | orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutUsers_order_options_updated_byTousersInput | orderOptionsUpdateManyWithWhereWithoutUsers_order_options_updated_byTousersInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_created_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput> | ordersCreateWithoutUsers_orders_created_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsers_orders_created_byTousersInput | ordersUpsertWithWhereUniqueWithoutUsers_orders_created_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_created_byTousersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsers_orders_created_byTousersInput | ordersUpdateWithWhereUniqueWithoutUsers_orders_created_byTousersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsers_orders_created_byTousersInput | ordersUpdateManyWithWhereWithoutUsers_orders_created_byTousersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput> | ordersCreateWithoutUsers_orders_status_changed_byTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput | ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput | ordersUpsertWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput[]
    createMany?: ordersCreateManyUsers_orders_status_changed_byTousersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput | ordersUpdateWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsers_orders_status_changed_byTousersInput | ordersUpdateManyWithWhereWithoutUsers_orders_status_changed_byTousersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput = {
    create?: XOR<ordersCreateWithoutUsers_orders_user_idTousersInput, ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput> | ordersCreateWithoutUsers_orders_user_idTousersInput[] | ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput | ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsers_orders_user_idTousersInput | ordersUpsertWithWhereUniqueWithoutUsers_orders_user_idTousersInput[]
    createMany?: ordersCreateManyUsers_orders_user_idTousersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsers_orders_user_idTousersInput | ordersUpdateWithWhereUniqueWithoutUsers_orders_user_idTousersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsers_orders_user_idTousersInput | ordersUpdateManyWithWhereWithoutUsers_orders_user_idTousersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type refreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput> | refreshTokenCreateWithoutUserInput[] | refreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refreshTokenCreateOrConnectWithoutUserInput | refreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: refreshTokenUpsertWithWhereUniqueWithoutUserInput | refreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refreshTokenCreateManyUserInputEnvelope
    set?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    disconnect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    delete?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    connect?: refreshTokenWhereUniqueInput | refreshTokenWhereUniqueInput[]
    update?: refreshTokenUpdateWithWhereUniqueWithoutUserInput | refreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refreshTokenUpdateManyWithWhereWithoutUserInput | refreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCategories_categories_created_byTousersInput = {
    create?: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutOther_categoriesInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCategories_categories_user_idTousersInput = {
    create?: XOR<usersCreateWithoutCategories_categories_user_idTousersInput, usersUncheckedCreateWithoutCategories_categories_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type itemsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<itemsCreateWithoutCategoriesInput, itemsUncheckedCreateWithoutCategoriesInput> | itemsCreateWithoutCategoriesInput[] | itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutCategoriesInput | itemsCreateOrConnectWithoutCategoriesInput[]
    createMany?: itemsCreateManyCategoriesInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type itemsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<itemsCreateWithoutCategoriesInput, itemsUncheckedCreateWithoutCategoriesInput> | itemsCreateWithoutCategoriesInput[] | itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutCategoriesInput | itemsCreateOrConnectWithoutCategoriesInput[]
    createMany?: itemsCreateManyCategoriesInputEnvelope
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_created_byTousersInput
    upsert?: usersUpsertWithoutCategories_categories_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategories_categories_created_byTousersInput, usersUpdateWithoutCategories_categories_created_byTousersInput>, usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput>
  }

  export type categoriesUpdateOneWithoutOther_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput
    upsert?: categoriesUpsertWithoutOther_categoriesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutOther_categoriesInput, categoriesUpdateWithoutOther_categoriesInput>, categoriesUncheckedUpdateWithoutOther_categoriesInput>
  }

  export type categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCategoriesInput | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCategoriesInput | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCategoriesInput | categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_updated_byTousersInput
    upsert?: usersUpsertWithoutCategories_categories_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategories_categories_updated_byTousersInput, usersUpdateWithoutCategories_categories_updated_byTousersInput>, usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutCategories_categories_user_idTousersInput, usersUncheckedCreateWithoutCategories_categories_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCategories_categories_user_idTousersInput
    upsert?: usersUpsertWithoutCategories_categories_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCategories_categories_user_idTousersInput, usersUpdateWithoutCategories_categories_user_idTousersInput>, usersUncheckedUpdateWithoutCategories_categories_user_idTousersInput>
  }

  export type itemsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<itemsCreateWithoutCategoriesInput, itemsUncheckedCreateWithoutCategoriesInput> | itemsCreateWithoutCategoriesInput[] | itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutCategoriesInput | itemsCreateOrConnectWithoutCategoriesInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutCategoriesInput | itemsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: itemsCreateManyCategoriesInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutCategoriesInput | itemsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutCategoriesInput | itemsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCategoriesInput | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCategoriesInput | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCategoriesInput | categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type itemsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<itemsCreateWithoutCategoriesInput, itemsUncheckedCreateWithoutCategoriesInput> | itemsCreateWithoutCategoriesInput[] | itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: itemsCreateOrConnectWithoutCategoriesInput | itemsCreateOrConnectWithoutCategoriesInput[]
    upsert?: itemsUpsertWithWhereUniqueWithoutCategoriesInput | itemsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: itemsCreateManyCategoriesInputEnvelope
    set?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    disconnect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    delete?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    connect?: itemsWhereUniqueInput | itemsWhereUniqueInput[]
    update?: itemsUpdateWithWhereUniqueWithoutCategoriesInput | itemsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: itemsUpdateManyWithWhereWithoutCategoriesInput | itemsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: itemsScalarWhereInput | itemsScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutItemsInput = {
    create?: XOR<categoriesCreateWithoutItemsInput, categoriesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutItemsInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutItems_items_created_byTousersInput = {
    create?: XOR<usersCreateWithoutItems_items_created_byTousersInput, usersUncheckedCreateWithoutItems_items_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutItems_items_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutItems_items_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutItems_items_updated_byTousersInput, usersUncheckedCreateWithoutItems_items_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutItems_items_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type optionsCreateNestedManyWithoutItemsInput = {
    create?: XOR<optionsCreateWithoutItemsInput, optionsUncheckedCreateWithoutItemsInput> | optionsCreateWithoutItemsInput[] | optionsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutItemsInput | optionsCreateOrConnectWithoutItemsInput[]
    createMany?: optionsCreateManyItemsInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type optionsUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<optionsCreateWithoutItemsInput, optionsUncheckedCreateWithoutItemsInput> | optionsCreateWithoutItemsInput[] | optionsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutItemsInput | optionsCreateOrConnectWithoutItemsInput[]
    createMany?: optionsCreateManyItemsInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type EnumitemTypeFieldUpdateOperationsInput = {
    set?: $Enums.itemType
  }

  export type categoriesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<categoriesCreateWithoutItemsInput, categoriesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutItemsInput
    upsert?: categoriesUpsertWithoutItemsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutItemsInput, categoriesUpdateWithoutItemsInput>, categoriesUncheckedUpdateWithoutItemsInput>
  }

  export type usersUpdateOneRequiredWithoutItems_items_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutItems_items_created_byTousersInput, usersUncheckedCreateWithoutItems_items_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutItems_items_created_byTousersInput
    upsert?: usersUpsertWithoutItems_items_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutItems_items_created_byTousersInput, usersUpdateWithoutItems_items_created_byTousersInput>, usersUncheckedUpdateWithoutItems_items_created_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutItems_items_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutItems_items_updated_byTousersInput, usersUncheckedCreateWithoutItems_items_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutItems_items_updated_byTousersInput
    upsert?: usersUpsertWithoutItems_items_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutItems_items_updated_byTousersInput, usersUpdateWithoutItems_items_updated_byTousersInput>, usersUncheckedUpdateWithoutItems_items_updated_byTousersInput>
  }

  export type optionsUpdateManyWithoutItemsNestedInput = {
    create?: XOR<optionsCreateWithoutItemsInput, optionsUncheckedCreateWithoutItemsInput> | optionsCreateWithoutItemsInput[] | optionsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutItemsInput | optionsCreateOrConnectWithoutItemsInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutItemsInput | optionsUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: optionsCreateManyItemsInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutItemsInput | optionsUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutItemsInput | optionsUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type optionsUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<optionsCreateWithoutItemsInput, optionsUncheckedCreateWithoutItemsInput> | optionsCreateWithoutItemsInput[] | optionsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutItemsInput | optionsCreateOrConnectWithoutItemsInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutItemsInput | optionsUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: optionsCreateManyItemsInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutItemsInput | optionsUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutItemsInput | optionsUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOptions_options_created_byTousersInput = {
    create?: XOR<usersCreateWithoutOptions_options_created_byTousersInput, usersUncheckedCreateWithoutOptions_options_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOptions_options_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type itemsCreateNestedOneWithoutOptionsInput = {
    create?: XOR<itemsCreateWithoutOptionsInput, itemsUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: itemsCreateOrConnectWithoutOptionsInput
    connect?: itemsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOptions_options_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutOptions_options_updated_byTousersInput, usersUncheckedCreateWithoutOptions_options_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOptions_options_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type orderOptionsCreateNestedManyWithoutOptionsInput = {
    create?: XOR<orderOptionsCreateWithoutOptionsInput, orderOptionsUncheckedCreateWithoutOptionsInput> | orderOptionsCreateWithoutOptionsInput[] | orderOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOptionsInput | orderOptionsCreateOrConnectWithoutOptionsInput[]
    createMany?: orderOptionsCreateManyOptionsInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type unitsCreateNestedOneWithoutOptionsInput = {
    create?: XOR<unitsCreateWithoutOptionsInput, unitsUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutOptionsInput
    connect?: unitsWhereUniqueInput
  }

  export type orderOptionsUncheckedCreateNestedManyWithoutOptionsInput = {
    create?: XOR<orderOptionsCreateWithoutOptionsInput, orderOptionsUncheckedCreateWithoutOptionsInput> | orderOptionsCreateWithoutOptionsInput[] | orderOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOptionsInput | orderOptionsCreateOrConnectWithoutOptionsInput[]
    createMany?: orderOptionsCreateManyOptionsInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumcurrencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.currencyType
  }

  export type usersUpdateOneRequiredWithoutOptions_options_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutOptions_options_created_byTousersInput, usersUncheckedCreateWithoutOptions_options_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOptions_options_created_byTousersInput
    upsert?: usersUpsertWithoutOptions_options_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOptions_options_created_byTousersInput, usersUpdateWithoutOptions_options_created_byTousersInput>, usersUncheckedUpdateWithoutOptions_options_created_byTousersInput>
  }

  export type itemsUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<itemsCreateWithoutOptionsInput, itemsUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: itemsCreateOrConnectWithoutOptionsInput
    upsert?: itemsUpsertWithoutOptionsInput
    connect?: itemsWhereUniqueInput
    update?: XOR<XOR<itemsUpdateToOneWithWhereWithoutOptionsInput, itemsUpdateWithoutOptionsInput>, itemsUncheckedUpdateWithoutOptionsInput>
  }

  export type usersUpdateOneRequiredWithoutOptions_options_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutOptions_options_updated_byTousersInput, usersUncheckedCreateWithoutOptions_options_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOptions_options_updated_byTousersInput
    upsert?: usersUpsertWithoutOptions_options_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOptions_options_updated_byTousersInput, usersUpdateWithoutOptions_options_updated_byTousersInput>, usersUncheckedUpdateWithoutOptions_options_updated_byTousersInput>
  }

  export type orderOptionsUpdateManyWithoutOptionsNestedInput = {
    create?: XOR<orderOptionsCreateWithoutOptionsInput, orderOptionsUncheckedCreateWithoutOptionsInput> | orderOptionsCreateWithoutOptionsInput[] | orderOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOptionsInput | orderOptionsCreateOrConnectWithoutOptionsInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutOptionsInput | orderOptionsUpsertWithWhereUniqueWithoutOptionsInput[]
    createMany?: orderOptionsCreateManyOptionsInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutOptionsInput | orderOptionsUpdateWithWhereUniqueWithoutOptionsInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutOptionsInput | orderOptionsUpdateManyWithWhereWithoutOptionsInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type unitsUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<unitsCreateWithoutOptionsInput, unitsUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutOptionsInput
    upsert?: unitsUpsertWithoutOptionsInput
    connect?: unitsWhereUniqueInput
    update?: XOR<XOR<unitsUpdateToOneWithWhereWithoutOptionsInput, unitsUpdateWithoutOptionsInput>, unitsUncheckedUpdateWithoutOptionsInput>
  }

  export type orderOptionsUncheckedUpdateManyWithoutOptionsNestedInput = {
    create?: XOR<orderOptionsCreateWithoutOptionsInput, orderOptionsUncheckedCreateWithoutOptionsInput> | orderOptionsCreateWithoutOptionsInput[] | orderOptionsUncheckedCreateWithoutOptionsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOptionsInput | orderOptionsCreateOrConnectWithoutOptionsInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutOptionsInput | orderOptionsUpsertWithWhereUniqueWithoutOptionsInput[]
    createMany?: orderOptionsCreateManyOptionsInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutOptionsInput | orderOptionsUpdateWithWhereUniqueWithoutOptionsInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutOptionsInput | orderOptionsUpdateManyWithWhereWithoutOptionsInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOrder_options_order_options_created_byTousersInput = {
    create?: XOR<usersCreateWithoutOrder_options_order_options_created_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrder_options_order_options_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type optionsCreateNestedOneWithoutOrder_optionsInput = {
    create?: XOR<optionsCreateWithoutOrder_optionsInput, optionsUncheckedCreateWithoutOrder_optionsInput>
    connectOrCreate?: optionsCreateOrConnectWithoutOrder_optionsInput
    connect?: optionsWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutOrder_optionsInput = {
    create?: XOR<ordersCreateWithoutOrder_optionsInput, ordersUncheckedCreateWithoutOrder_optionsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_optionsInput
    connect?: ordersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrder_options_order_options_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutOrder_options_order_options_updated_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrder_options_order_options_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type unitsCreateNestedOneWithoutOrder_optionsInput = {
    create?: XOR<unitsCreateWithoutOrder_optionsInput, unitsUncheckedCreateWithoutOrder_optionsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutOrder_optionsInput
    connect?: unitsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutOrder_options_order_options_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutOrder_options_order_options_created_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrder_options_order_options_created_byTousersInput
    upsert?: usersUpsertWithoutOrder_options_order_options_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrder_options_order_options_created_byTousersInput, usersUpdateWithoutOrder_options_order_options_created_byTousersInput>, usersUncheckedUpdateWithoutOrder_options_order_options_created_byTousersInput>
  }

  export type optionsUpdateOneRequiredWithoutOrder_optionsNestedInput = {
    create?: XOR<optionsCreateWithoutOrder_optionsInput, optionsUncheckedCreateWithoutOrder_optionsInput>
    connectOrCreate?: optionsCreateOrConnectWithoutOrder_optionsInput
    upsert?: optionsUpsertWithoutOrder_optionsInput
    connect?: optionsWhereUniqueInput
    update?: XOR<XOR<optionsUpdateToOneWithWhereWithoutOrder_optionsInput, optionsUpdateWithoutOrder_optionsInput>, optionsUncheckedUpdateWithoutOrder_optionsInput>
  }

  export type ordersUpdateOneRequiredWithoutOrder_optionsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_optionsInput, ordersUncheckedCreateWithoutOrder_optionsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_optionsInput
    upsert?: ordersUpsertWithoutOrder_optionsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_optionsInput, ordersUpdateWithoutOrder_optionsInput>, ordersUncheckedUpdateWithoutOrder_optionsInput>
  }

  export type usersUpdateOneRequiredWithoutOrder_options_order_options_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutOrder_options_order_options_updated_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrder_options_order_options_updated_byTousersInput
    upsert?: usersUpsertWithoutOrder_options_order_options_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrder_options_order_options_updated_byTousersInput, usersUpdateWithoutOrder_options_order_options_updated_byTousersInput>, usersUncheckedUpdateWithoutOrder_options_order_options_updated_byTousersInput>
  }

  export type unitsUpdateOneRequiredWithoutOrder_optionsNestedInput = {
    create?: XOR<unitsCreateWithoutOrder_optionsInput, unitsUncheckedCreateWithoutOrder_optionsInput>
    connectOrCreate?: unitsCreateOrConnectWithoutOrder_optionsInput
    upsert?: unitsUpsertWithoutOrder_optionsInput
    connect?: unitsWhereUniqueInput
    update?: XOR<XOR<unitsUpdateToOneWithWhereWithoutOrder_optionsInput, unitsUpdateWithoutOrder_optionsInput>, unitsUncheckedUpdateWithoutOrder_optionsInput>
  }

  export type orderOptionsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<orderOptionsCreateWithoutOrdersInput, orderOptionsUncheckedCreateWithoutOrdersInput> | orderOptionsCreateWithoutOrdersInput[] | orderOptionsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOrdersInput | orderOptionsCreateOrConnectWithoutOrdersInput[]
    createMany?: orderOptionsCreateManyOrdersInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrders_orders_created_byTousersInput = {
    create?: XOR<usersCreateWithoutOrders_orders_created_byTousersInput, usersUncheckedCreateWithoutOrders_orders_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrders_orders_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrders_orders_status_changed_byTousersInput = {
    create?: XOR<usersCreateWithoutOrders_orders_status_changed_byTousersInput, usersUncheckedCreateWithoutOrders_orders_status_changed_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrders_orders_status_changed_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrders_orders_user_idTousersInput = {
    create?: XOR<usersCreateWithoutOrders_orders_user_idTousersInput, usersUncheckedCreateWithoutOrders_orders_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrders_orders_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type orderOptionsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<orderOptionsCreateWithoutOrdersInput, orderOptionsUncheckedCreateWithoutOrdersInput> | orderOptionsCreateWithoutOrdersInput[] | orderOptionsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOrdersInput | orderOptionsCreateOrConnectWithoutOrdersInput[]
    createMany?: orderOptionsCreateManyOrdersInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumorderStatusFieldUpdateOperationsInput = {
    set?: $Enums.orderStatus
  }

  export type EnumpaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.paymentType
  }

  export type orderOptionsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<orderOptionsCreateWithoutOrdersInput, orderOptionsUncheckedCreateWithoutOrdersInput> | orderOptionsCreateWithoutOrdersInput[] | orderOptionsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOrdersInput | orderOptionsCreateOrConnectWithoutOrdersInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutOrdersInput | orderOptionsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: orderOptionsCreateManyOrdersInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutOrdersInput | orderOptionsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutOrdersInput | orderOptionsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutOrders_orders_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutOrders_orders_created_byTousersInput, usersUncheckedCreateWithoutOrders_orders_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrders_orders_created_byTousersInput
    upsert?: usersUpsertWithoutOrders_orders_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrders_orders_created_byTousersInput, usersUpdateWithoutOrders_orders_created_byTousersInput>, usersUncheckedUpdateWithoutOrders_orders_created_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutOrders_orders_status_changed_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutOrders_orders_status_changed_byTousersInput, usersUncheckedCreateWithoutOrders_orders_status_changed_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrders_orders_status_changed_byTousersInput
    upsert?: usersUpsertWithoutOrders_orders_status_changed_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrders_orders_status_changed_byTousersInput, usersUpdateWithoutOrders_orders_status_changed_byTousersInput>, usersUncheckedUpdateWithoutOrders_orders_status_changed_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutOrders_orders_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutOrders_orders_user_idTousersInput, usersUncheckedCreateWithoutOrders_orders_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrders_orders_user_idTousersInput
    upsert?: usersUpsertWithoutOrders_orders_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrders_orders_user_idTousersInput, usersUpdateWithoutOrders_orders_user_idTousersInput>, usersUncheckedUpdateWithoutOrders_orders_user_idTousersInput>
  }

  export type orderOptionsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<orderOptionsCreateWithoutOrdersInput, orderOptionsUncheckedCreateWithoutOrdersInput> | orderOptionsCreateWithoutOrdersInput[] | orderOptionsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutOrdersInput | orderOptionsCreateOrConnectWithoutOrdersInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutOrdersInput | orderOptionsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: orderOptionsCreateManyOrdersInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutOrdersInput | orderOptionsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutOrdersInput | orderOptionsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<usersCreateWithoutRefreshTokensInput, usersUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefreshTokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<usersCreateWithoutRefreshTokensInput, usersUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefreshTokensInput
    upsert?: usersUpsertWithoutRefreshTokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRefreshTokensInput, usersUpdateWithoutRefreshTokensInput>, usersUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type unitsCreateNestedManyWithoutUnit_classInput = {
    create?: XOR<unitsCreateWithoutUnit_classInput, unitsUncheckedCreateWithoutUnit_classInput> | unitsCreateWithoutUnit_classInput[] | unitsUncheckedCreateWithoutUnit_classInput[]
    connectOrCreate?: unitsCreateOrConnectWithoutUnit_classInput | unitsCreateOrConnectWithoutUnit_classInput[]
    createMany?: unitsCreateManyUnit_classInputEnvelope
    connect?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
  }

  export type unitsUncheckedCreateNestedManyWithoutUnit_classInput = {
    create?: XOR<unitsCreateWithoutUnit_classInput, unitsUncheckedCreateWithoutUnit_classInput> | unitsCreateWithoutUnit_classInput[] | unitsUncheckedCreateWithoutUnit_classInput[]
    connectOrCreate?: unitsCreateOrConnectWithoutUnit_classInput | unitsCreateOrConnectWithoutUnit_classInput[]
    createMany?: unitsCreateManyUnit_classInputEnvelope
    connect?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
  }

  export type unitsUpdateManyWithoutUnit_classNestedInput = {
    create?: XOR<unitsCreateWithoutUnit_classInput, unitsUncheckedCreateWithoutUnit_classInput> | unitsCreateWithoutUnit_classInput[] | unitsUncheckedCreateWithoutUnit_classInput[]
    connectOrCreate?: unitsCreateOrConnectWithoutUnit_classInput | unitsCreateOrConnectWithoutUnit_classInput[]
    upsert?: unitsUpsertWithWhereUniqueWithoutUnit_classInput | unitsUpsertWithWhereUniqueWithoutUnit_classInput[]
    createMany?: unitsCreateManyUnit_classInputEnvelope
    set?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    disconnect?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    delete?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    connect?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    update?: unitsUpdateWithWhereUniqueWithoutUnit_classInput | unitsUpdateWithWhereUniqueWithoutUnit_classInput[]
    updateMany?: unitsUpdateManyWithWhereWithoutUnit_classInput | unitsUpdateManyWithWhereWithoutUnit_classInput[]
    deleteMany?: unitsScalarWhereInput | unitsScalarWhereInput[]
  }

  export type unitsUncheckedUpdateManyWithoutUnit_classNestedInput = {
    create?: XOR<unitsCreateWithoutUnit_classInput, unitsUncheckedCreateWithoutUnit_classInput> | unitsCreateWithoutUnit_classInput[] | unitsUncheckedCreateWithoutUnit_classInput[]
    connectOrCreate?: unitsCreateOrConnectWithoutUnit_classInput | unitsCreateOrConnectWithoutUnit_classInput[]
    upsert?: unitsUpsertWithWhereUniqueWithoutUnit_classInput | unitsUpsertWithWhereUniqueWithoutUnit_classInput[]
    createMany?: unitsCreateManyUnit_classInputEnvelope
    set?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    disconnect?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    delete?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    connect?: unitsWhereUniqueInput | unitsWhereUniqueInput[]
    update?: unitsUpdateWithWhereUniqueWithoutUnit_classInput | unitsUpdateWithWhereUniqueWithoutUnit_classInput[]
    updateMany?: unitsUpdateManyWithWhereWithoutUnit_classInput | unitsUpdateManyWithWhereWithoutUnit_classInput[]
    deleteMany?: unitsScalarWhereInput | unitsScalarWhereInput[]
  }

  export type unit_classesCreateNestedOneWithoutUnitsInput = {
    create?: XOR<unit_classesCreateWithoutUnitsInput, unit_classesUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: unit_classesCreateOrConnectWithoutUnitsInput
    connect?: unit_classesWhereUniqueInput
  }

  export type optionsCreateNestedManyWithoutUnitsInput = {
    create?: XOR<optionsCreateWithoutUnitsInput, optionsUncheckedCreateWithoutUnitsInput> | optionsCreateWithoutUnitsInput[] | optionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUnitsInput | optionsCreateOrConnectWithoutUnitsInput[]
    createMany?: optionsCreateManyUnitsInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type orderOptionsCreateNestedManyWithoutUnitsInput = {
    create?: XOR<orderOptionsCreateWithoutUnitsInput, orderOptionsUncheckedCreateWithoutUnitsInput> | orderOptionsCreateWithoutUnitsInput[] | orderOptionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUnitsInput | orderOptionsCreateOrConnectWithoutUnitsInput[]
    createMany?: orderOptionsCreateManyUnitsInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type optionsUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<optionsCreateWithoutUnitsInput, optionsUncheckedCreateWithoutUnitsInput> | optionsCreateWithoutUnitsInput[] | optionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUnitsInput | optionsCreateOrConnectWithoutUnitsInput[]
    createMany?: optionsCreateManyUnitsInputEnvelope
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
  }

  export type orderOptionsUncheckedCreateNestedManyWithoutUnitsInput = {
    create?: XOR<orderOptionsCreateWithoutUnitsInput, orderOptionsUncheckedCreateWithoutUnitsInput> | orderOptionsCreateWithoutUnitsInput[] | orderOptionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUnitsInput | orderOptionsCreateOrConnectWithoutUnitsInput[]
    createMany?: orderOptionsCreateManyUnitsInputEnvelope
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type unit_classesUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<unit_classesCreateWithoutUnitsInput, unit_classesUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: unit_classesCreateOrConnectWithoutUnitsInput
    upsert?: unit_classesUpsertWithoutUnitsInput
    connect?: unit_classesWhereUniqueInput
    update?: XOR<XOR<unit_classesUpdateToOneWithWhereWithoutUnitsInput, unit_classesUpdateWithoutUnitsInput>, unit_classesUncheckedUpdateWithoutUnitsInput>
  }

  export type optionsUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<optionsCreateWithoutUnitsInput, optionsUncheckedCreateWithoutUnitsInput> | optionsCreateWithoutUnitsInput[] | optionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUnitsInput | optionsCreateOrConnectWithoutUnitsInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutUnitsInput | optionsUpsertWithWhereUniqueWithoutUnitsInput[]
    createMany?: optionsCreateManyUnitsInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutUnitsInput | optionsUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutUnitsInput | optionsUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type orderOptionsUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<orderOptionsCreateWithoutUnitsInput, orderOptionsUncheckedCreateWithoutUnitsInput> | orderOptionsCreateWithoutUnitsInput[] | orderOptionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUnitsInput | orderOptionsCreateOrConnectWithoutUnitsInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutUnitsInput | orderOptionsUpsertWithWhereUniqueWithoutUnitsInput[]
    createMany?: orderOptionsCreateManyUnitsInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutUnitsInput | orderOptionsUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutUnitsInput | orderOptionsUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type optionsUncheckedUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<optionsCreateWithoutUnitsInput, optionsUncheckedCreateWithoutUnitsInput> | optionsCreateWithoutUnitsInput[] | optionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: optionsCreateOrConnectWithoutUnitsInput | optionsCreateOrConnectWithoutUnitsInput[]
    upsert?: optionsUpsertWithWhereUniqueWithoutUnitsInput | optionsUpsertWithWhereUniqueWithoutUnitsInput[]
    createMany?: optionsCreateManyUnitsInputEnvelope
    set?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    disconnect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    delete?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    connect?: optionsWhereUniqueInput | optionsWhereUniqueInput[]
    update?: optionsUpdateWithWhereUniqueWithoutUnitsInput | optionsUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: optionsUpdateManyWithWhereWithoutUnitsInput | optionsUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: optionsScalarWhereInput | optionsScalarWhereInput[]
  }

  export type orderOptionsUncheckedUpdateManyWithoutUnitsNestedInput = {
    create?: XOR<orderOptionsCreateWithoutUnitsInput, orderOptionsUncheckedCreateWithoutUnitsInput> | orderOptionsCreateWithoutUnitsInput[] | orderOptionsUncheckedCreateWithoutUnitsInput[]
    connectOrCreate?: orderOptionsCreateOrConnectWithoutUnitsInput | orderOptionsCreateOrConnectWithoutUnitsInput[]
    upsert?: orderOptionsUpsertWithWhereUniqueWithoutUnitsInput | orderOptionsUpsertWithWhereUniqueWithoutUnitsInput[]
    createMany?: orderOptionsCreateManyUnitsInputEnvelope
    set?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    disconnect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    delete?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    connect?: orderOptionsWhereUniqueInput | orderOptionsWhereUniqueInput[]
    update?: orderOptionsUpdateWithWhereUniqueWithoutUnitsInput | orderOptionsUpdateWithWhereUniqueWithoutUnitsInput[]
    updateMany?: orderOptionsUpdateManyWithWhereWithoutUnitsInput | orderOptionsUpdateManyWithWhereWithoutUnitsInput[]
    deleteMany?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumitemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.itemType | EnumitemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumitemTypeFilter<$PrismaModel> | $Enums.itemType
  }

  export type NestedEnumitemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.itemType | EnumitemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.itemType[] | ListEnumitemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumitemTypeWithAggregatesFilter<$PrismaModel> | $Enums.itemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumitemTypeFilter<$PrismaModel>
    _max?: NestedEnumitemTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumcurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.currencyType | EnumcurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcurrencyTypeFilter<$PrismaModel> | $Enums.currencyType
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumcurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.currencyType | EnumcurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.currencyType[] | ListEnumcurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.currencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumcurrencyTypeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumorderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusFilter<$PrismaModel> | $Enums.orderStatus
  }

  export type NestedEnumpaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentType | EnumpaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentTypeFilter<$PrismaModel> | $Enums.paymentType
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumorderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orderStatus | EnumorderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.orderStatus[] | ListEnumorderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumorderStatusWithAggregatesFilter<$PrismaModel> | $Enums.orderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorderStatusFilter<$PrismaModel>
    _max?: NestedEnumorderStatusFilter<$PrismaModel>
  }

  export type NestedEnumpaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentType | EnumpaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentType[] | ListEnumpaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.paymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumpaymentTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type categoriesCreateWithoutUsers_categories_created_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    users_categories_updated_byTousers: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    users_categories_user_idTousers: usersCreateNestedOneWithoutCategories_categories_user_idTousersInput
    items?: itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    items?: itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsers_categories_created_byTousersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesCreateManyUsers_categories_created_byTousersInputEnvelope = {
    data: categoriesCreateManyUsers_categories_created_byTousersInput | categoriesCreateManyUsers_categories_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutUsers_categories_updated_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    users_categories_user_idTousers: usersCreateNestedOneWithoutCategories_categories_user_idTousersInput
    items?: itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    items?: itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesCreateManyUsers_categories_updated_byTousersInputEnvelope = {
    data: categoriesCreateManyUsers_categories_updated_byTousersInput | categoriesCreateManyUsers_categories_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutUsers_categories_user_idTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    users_categories_updated_byTousers: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    items?: itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    items?: itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutUsers_categories_user_idTousersInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput>
  }

  export type categoriesCreateManyUsers_categories_user_idTousersInputEnvelope = {
    data: categoriesCreateManyUsers_categories_user_idTousersInput | categoriesCreateManyUsers_categories_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type itemsCreateWithoutUsers_items_created_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.itemType
    categories: categoriesCreateNestedOneWithoutItemsInput
    users_items_updated_byTousers: usersCreateNestedOneWithoutItems_items_updated_byTousersInput
    options?: optionsCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateWithoutUsers_items_created_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by: string
    type: $Enums.itemType
    options?: optionsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsCreateOrConnectWithoutUsers_items_created_byTousersInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutUsers_items_created_byTousersInput, itemsUncheckedCreateWithoutUsers_items_created_byTousersInput>
  }

  export type itemsCreateManyUsers_items_created_byTousersInputEnvelope = {
    data: itemsCreateManyUsers_items_created_byTousersInput | itemsCreateManyUsers_items_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type itemsCreateWithoutUsers_items_updated_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.itemType
    categories: categoriesCreateNestedOneWithoutItemsInput
    users_items_created_byTousers: usersCreateNestedOneWithoutItems_items_created_byTousersInput
    options?: optionsCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    type: $Enums.itemType
    options?: optionsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsCreateOrConnectWithoutUsers_items_updated_byTousersInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutUsers_items_updated_byTousersInput, itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput>
  }

  export type itemsCreateManyUsers_items_updated_byTousersInputEnvelope = {
    data: itemsCreateManyUsers_items_updated_byTousersInput | itemsCreateManyUsers_items_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type optionsCreateWithoutUsers_options_created_byTousersInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    currency?: $Enums.currencyType
    items: itemsCreateNestedOneWithoutOptionsInput
    users_options_updated_byTousers: usersCreateNestedOneWithoutOptions_options_updated_byTousersInput
    order_options?: orderOptionsCreateNestedManyWithoutOptionsInput
    units: unitsCreateNestedOneWithoutOptionsInput
  }

  export type optionsUncheckedCreateWithoutUsers_options_created_byTousersInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by: string
    currency?: $Enums.currencyType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type optionsCreateOrConnectWithoutUsers_options_created_byTousersInput = {
    where: optionsWhereUniqueInput
    create: XOR<optionsCreateWithoutUsers_options_created_byTousersInput, optionsUncheckedCreateWithoutUsers_options_created_byTousersInput>
  }

  export type optionsCreateManyUsers_options_created_byTousersInputEnvelope = {
    data: optionsCreateManyUsers_options_created_byTousersInput | optionsCreateManyUsers_options_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type optionsCreateWithoutUsers_options_updated_byTousersInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    currency?: $Enums.currencyType
    users_options_created_byTousers: usersCreateNestedOneWithoutOptions_options_created_byTousersInput
    items: itemsCreateNestedOneWithoutOptionsInput
    order_options?: orderOptionsCreateNestedManyWithoutOptionsInput
    units: unitsCreateNestedOneWithoutOptionsInput
  }

  export type optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    currency?: $Enums.currencyType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type optionsCreateOrConnectWithoutUsers_options_updated_byTousersInput = {
    where: optionsWhereUniqueInput
    create: XOR<optionsCreateWithoutUsers_options_updated_byTousersInput, optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput>
  }

  export type optionsCreateManyUsers_options_updated_byTousersInputEnvelope = {
    data: optionsCreateManyUsers_options_updated_byTousersInput | optionsCreateManyUsers_options_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type orderOptionsCreateWithoutUsers_order_options_created_byTousersInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    options: optionsCreateNestedOneWithoutOrder_optionsInput
    orders: ordersCreateNestedOneWithoutOrder_optionsInput
    users_order_options_updated_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_updated_byTousersInput
    units: unitsCreateNestedOneWithoutOrder_optionsInput
  }

  export type orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput = {
    id?: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by: string
  }

  export type orderOptionsCreateOrConnectWithoutUsers_order_options_created_byTousersInput = {
    where: orderOptionsWhereUniqueInput
    create: XOR<orderOptionsCreateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput>
  }

  export type orderOptionsCreateManyUsers_order_options_created_byTousersInputEnvelope = {
    data: orderOptionsCreateManyUsers_order_options_created_byTousersInput | orderOptionsCreateManyUsers_order_options_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_order_options_created_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_created_byTousersInput
    options: optionsCreateNestedOneWithoutOrder_optionsInput
    orders: ordersCreateNestedOneWithoutOrder_optionsInput
    units: unitsCreateNestedOneWithoutOrder_optionsInput
  }

  export type orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput = {
    id?: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
  }

  export type orderOptionsCreateOrConnectWithoutUsers_order_options_updated_byTousersInput = {
    where: orderOptionsWhereUniqueInput
    create: XOR<orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput>
  }

  export type orderOptionsCreateManyUsers_order_options_updated_byTousersInputEnvelope = {
    data: orderOptionsCreateManyUsers_order_options_updated_byTousersInput | orderOptionsCreateManyUsers_order_options_updated_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsers_orders_created_byTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsCreateNestedManyWithoutOrdersInput
    users_orders_status_changed_byTousers: usersCreateNestedOneWithoutOrders_orders_status_changed_byTousersInput
    users_orders_user_idTousers: usersCreateNestedOneWithoutOrders_orders_user_idTousersInput
  }

  export type ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status_changed_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsers_orders_created_byTousersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsers_orders_created_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput>
  }

  export type ordersCreateManyUsers_orders_created_byTousersInputEnvelope = {
    data: ordersCreateManyUsers_orders_created_byTousersInput | ordersCreateManyUsers_orders_created_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsers_orders_status_changed_byTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsCreateNestedManyWithoutOrdersInput
    users_orders_created_byTousers: usersCreateNestedOneWithoutOrders_orders_created_byTousersInput
    users_orders_user_idTousers: usersCreateNestedOneWithoutOrders_orders_user_idTousersInput
  }

  export type ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsers_orders_status_changed_byTousersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput>
  }

  export type ordersCreateManyUsers_orders_status_changed_byTousersInputEnvelope = {
    data: ordersCreateManyUsers_orders_status_changed_byTousersInput | ordersCreateManyUsers_orders_status_changed_byTousersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsers_orders_user_idTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsCreateNestedManyWithoutOrdersInput
    users_orders_created_byTousers: usersCreateNestedOneWithoutOrders_orders_created_byTousersInput
    users_orders_status_changed_byTousers: usersCreateNestedOneWithoutOrders_orders_status_changed_byTousersInput
  }

  export type ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    status_changed_by: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsers_orders_user_idTousersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsers_orders_user_idTousersInput, ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput>
  }

  export type ordersCreateManyUsers_orders_user_idTousersInputEnvelope = {
    data: ordersCreateManyUsers_orders_user_idTousersInput | ordersCreateManyUsers_orders_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type refreshTokenCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expired_at: Date | string
    created_at?: Date | string
    device?: string | null
    ipAddress?: string | null
  }

  export type refreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token_hash: string
    expired_at: Date | string
    created_at?: Date | string
    device?: string | null
    ipAddress?: string | null
  }

  export type refreshTokenCreateOrConnectWithoutUserInput = {
    where: refreshTokenWhereUniqueInput
    create: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput>
  }

  export type refreshTokenCreateManyUserInputEnvelope = {
    data: refreshTokenCreateManyUserInput | refreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsers_categories_created_byTousersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_created_byTousersInput>
    create: XOR<categoriesCreateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsers_categories_created_byTousersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsers_categories_created_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsers_categories_created_byTousersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    id?: UuidFilter<"categories"> | string
    parent_id?: UuidNullableFilter<"categories"> | string | null
    name?: StringFilter<"categories"> | string
    image_url?: StringNullableFilter<"categories"> | string | null
    user_id?: UuidFilter<"categories"> | string
    created_at?: DateTimeFilter<"categories"> | Date | string
    created_by?: UuidFilter<"categories"> | string
    updated_at?: DateTimeFilter<"categories"> | Date | string
    updated_by?: UuidFilter<"categories"> | string
    deleted_at?: DateTimeNullableFilter<"categories"> | Date | string | null
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_updated_byTousersInput>
    create: XOR<categoriesCreateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedCreateWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsers_categories_updated_byTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsers_categories_updated_byTousersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersInput>
  }

  export type categoriesUpsertWithWhereUniqueWithoutUsers_categories_user_idTousersInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_user_idTousersInput>
    create: XOR<categoriesCreateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedCreateWithoutUsers_categories_user_idTousersInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutUsers_categories_user_idTousersInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutUsers_categories_user_idTousersInput, categoriesUncheckedUpdateWithoutUsers_categories_user_idTousersInput>
  }

  export type categoriesUpdateManyWithWhereWithoutUsers_categories_user_idTousersInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersInput>
  }

  export type itemsUpsertWithWhereUniqueWithoutUsers_items_created_byTousersInput = {
    where: itemsWhereUniqueInput
    update: XOR<itemsUpdateWithoutUsers_items_created_byTousersInput, itemsUncheckedUpdateWithoutUsers_items_created_byTousersInput>
    create: XOR<itemsCreateWithoutUsers_items_created_byTousersInput, itemsUncheckedCreateWithoutUsers_items_created_byTousersInput>
  }

  export type itemsUpdateWithWhereUniqueWithoutUsers_items_created_byTousersInput = {
    where: itemsWhereUniqueInput
    data: XOR<itemsUpdateWithoutUsers_items_created_byTousersInput, itemsUncheckedUpdateWithoutUsers_items_created_byTousersInput>
  }

  export type itemsUpdateManyWithWhereWithoutUsers_items_created_byTousersInput = {
    where: itemsScalarWhereInput
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersInput>
  }

  export type itemsScalarWhereInput = {
    AND?: itemsScalarWhereInput | itemsScalarWhereInput[]
    OR?: itemsScalarWhereInput[]
    NOT?: itemsScalarWhereInput | itemsScalarWhereInput[]
    id?: UuidFilter<"items"> | string
    name?: StringFilter<"items"> | string
    image_url?: StringNullableFilter<"items"> | string | null
    cat_id?: UuidFilter<"items"> | string
    created_at?: DateTimeFilter<"items"> | Date | string
    updated_at?: DateTimeFilter<"items"> | Date | string
    deleted_at?: DateTimeNullableFilter<"items"> | Date | string | null
    created_by?: UuidFilter<"items"> | string
    updated_by?: UuidFilter<"items"> | string
    type?: EnumitemTypeFilter<"items"> | $Enums.itemType
  }

  export type itemsUpsertWithWhereUniqueWithoutUsers_items_updated_byTousersInput = {
    where: itemsWhereUniqueInput
    update: XOR<itemsUpdateWithoutUsers_items_updated_byTousersInput, itemsUncheckedUpdateWithoutUsers_items_updated_byTousersInput>
    create: XOR<itemsCreateWithoutUsers_items_updated_byTousersInput, itemsUncheckedCreateWithoutUsers_items_updated_byTousersInput>
  }

  export type itemsUpdateWithWhereUniqueWithoutUsers_items_updated_byTousersInput = {
    where: itemsWhereUniqueInput
    data: XOR<itemsUpdateWithoutUsers_items_updated_byTousersInput, itemsUncheckedUpdateWithoutUsers_items_updated_byTousersInput>
  }

  export type itemsUpdateManyWithWhereWithoutUsers_items_updated_byTousersInput = {
    where: itemsScalarWhereInput
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersInput>
  }

  export type optionsUpsertWithWhereUniqueWithoutUsers_options_created_byTousersInput = {
    where: optionsWhereUniqueInput
    update: XOR<optionsUpdateWithoutUsers_options_created_byTousersInput, optionsUncheckedUpdateWithoutUsers_options_created_byTousersInput>
    create: XOR<optionsCreateWithoutUsers_options_created_byTousersInput, optionsUncheckedCreateWithoutUsers_options_created_byTousersInput>
  }

  export type optionsUpdateWithWhereUniqueWithoutUsers_options_created_byTousersInput = {
    where: optionsWhereUniqueInput
    data: XOR<optionsUpdateWithoutUsers_options_created_byTousersInput, optionsUncheckedUpdateWithoutUsers_options_created_byTousersInput>
  }

  export type optionsUpdateManyWithWhereWithoutUsers_options_created_byTousersInput = {
    where: optionsScalarWhereInput
    data: XOR<optionsUpdateManyMutationInput, optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersInput>
  }

  export type optionsScalarWhereInput = {
    AND?: optionsScalarWhereInput | optionsScalarWhereInput[]
    OR?: optionsScalarWhereInput[]
    NOT?: optionsScalarWhereInput | optionsScalarWhereInput[]
    id?: UuidFilter<"options"> | string
    name?: StringFilter<"options"> | string
    price_per_base_unit?: DecimalFilter<"options"> | Decimal | DecimalJsLike | number | string
    unit_id?: UuidFilter<"options"> | string
    item_id?: UuidFilter<"options"> | string
    created_at?: DateTimeFilter<"options"> | Date | string
    updated_at?: DateTimeFilter<"options"> | Date | string
    deleted_at?: DateTimeNullableFilter<"options"> | Date | string | null
    created_by?: UuidFilter<"options"> | string
    updated_by?: UuidFilter<"options"> | string
    currency?: EnumcurrencyTypeFilter<"options"> | $Enums.currencyType
  }

  export type optionsUpsertWithWhereUniqueWithoutUsers_options_updated_byTousersInput = {
    where: optionsWhereUniqueInput
    update: XOR<optionsUpdateWithoutUsers_options_updated_byTousersInput, optionsUncheckedUpdateWithoutUsers_options_updated_byTousersInput>
    create: XOR<optionsCreateWithoutUsers_options_updated_byTousersInput, optionsUncheckedCreateWithoutUsers_options_updated_byTousersInput>
  }

  export type optionsUpdateWithWhereUniqueWithoutUsers_options_updated_byTousersInput = {
    where: optionsWhereUniqueInput
    data: XOR<optionsUpdateWithoutUsers_options_updated_byTousersInput, optionsUncheckedUpdateWithoutUsers_options_updated_byTousersInput>
  }

  export type optionsUpdateManyWithWhereWithoutUsers_options_updated_byTousersInput = {
    where: optionsScalarWhereInput
    data: XOR<optionsUpdateManyMutationInput, optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersInput>
  }

  export type orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_created_byTousersInput = {
    where: orderOptionsWhereUniqueInput
    update: XOR<orderOptionsUpdateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedUpdateWithoutUsers_order_options_created_byTousersInput>
    create: XOR<orderOptionsCreateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_created_byTousersInput>
  }

  export type orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_created_byTousersInput = {
    where: orderOptionsWhereUniqueInput
    data: XOR<orderOptionsUpdateWithoutUsers_order_options_created_byTousersInput, orderOptionsUncheckedUpdateWithoutUsers_order_options_created_byTousersInput>
  }

  export type orderOptionsUpdateManyWithWhereWithoutUsers_order_options_created_byTousersInput = {
    where: orderOptionsScalarWhereInput
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersInput>
  }

  export type orderOptionsScalarWhereInput = {
    AND?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
    OR?: orderOptionsScalarWhereInput[]
    NOT?: orderOptionsScalarWhereInput | orderOptionsScalarWhereInput[]
    id?: UuidFilter<"orderOptions"> | string
    order_id?: UuidFilter<"orderOptions"> | string
    option_id?: UuidFilter<"orderOptions"> | string
    unit_id?: UuidFilter<"orderOptions"> | string
    quantity?: DecimalFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFilter<"orderOptions"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"orderOptions"> | Date | string
    updated_at?: DateTimeFilter<"orderOptions"> | Date | string
    deleted_at?: DateTimeNullableFilter<"orderOptions"> | Date | string | null
    created_by?: UuidFilter<"orderOptions"> | string
    updated_by?: UuidFilter<"orderOptions"> | string
  }

  export type orderOptionsUpsertWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput = {
    where: orderOptionsWhereUniqueInput
    update: XOR<orderOptionsUpdateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedUpdateWithoutUsers_order_options_updated_byTousersInput>
    create: XOR<orderOptionsCreateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedCreateWithoutUsers_order_options_updated_byTousersInput>
  }

  export type orderOptionsUpdateWithWhereUniqueWithoutUsers_order_options_updated_byTousersInput = {
    where: orderOptionsWhereUniqueInput
    data: XOR<orderOptionsUpdateWithoutUsers_order_options_updated_byTousersInput, orderOptionsUncheckedUpdateWithoutUsers_order_options_updated_byTousersInput>
  }

  export type orderOptionsUpdateManyWithWhereWithoutUsers_order_options_updated_byTousersInput = {
    where: orderOptionsScalarWhereInput
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsers_orders_created_byTousersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsers_orders_created_byTousersInput, ordersUncheckedUpdateWithoutUsers_orders_created_byTousersInput>
    create: XOR<ordersCreateWithoutUsers_orders_created_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_created_byTousersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsers_orders_created_byTousersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsers_orders_created_byTousersInput, ordersUncheckedUpdateWithoutUsers_orders_created_byTousersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsers_orders_created_byTousersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: UuidFilter<"orders"> | string
    order_number?: BigIntFilter<"orders"> | bigint | number
    order_name?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    status_changed_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    discount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_by?: UuidFilter<"orders"> | string
    status_changed_by?: UuidFilter<"orders"> | string
    user_id?: UuidFilter<"orders"> | string
    status?: EnumorderStatusFilter<"orders"> | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFilter<"orders"> | $Enums.paymentType
  }

  export type ordersUpsertWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedUpdateWithoutUsers_orders_status_changed_byTousersInput>
    create: XOR<ordersCreateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedCreateWithoutUsers_orders_status_changed_byTousersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsers_orders_status_changed_byTousersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsers_orders_status_changed_byTousersInput, ordersUncheckedUpdateWithoutUsers_orders_status_changed_byTousersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsers_orders_status_changed_byTousersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsers_orders_user_idTousersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsers_orders_user_idTousersInput, ordersUncheckedUpdateWithoutUsers_orders_user_idTousersInput>
    create: XOR<ordersCreateWithoutUsers_orders_user_idTousersInput, ordersUncheckedCreateWithoutUsers_orders_user_idTousersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsers_orders_user_idTousersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsers_orders_user_idTousersInput, ordersUncheckedUpdateWithoutUsers_orders_user_idTousersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsers_orders_user_idTousersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersInput>
  }

  export type refreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: refreshTokenWhereUniqueInput
    update: XOR<refreshTokenUpdateWithoutUserInput, refreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<refreshTokenCreateWithoutUserInput, refreshTokenUncheckedCreateWithoutUserInput>
  }

  export type refreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: refreshTokenWhereUniqueInput
    data: XOR<refreshTokenUpdateWithoutUserInput, refreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type refreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: refreshTokenScalarWhereInput
    data: XOR<refreshTokenUpdateManyMutationInput, refreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type refreshTokenScalarWhereInput = {
    AND?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
    OR?: refreshTokenScalarWhereInput[]
    NOT?: refreshTokenScalarWhereInput | refreshTokenScalarWhereInput[]
    id?: StringFilter<"refreshToken"> | string
    user_id?: UuidFilter<"refreshToken"> | string
    token_hash?: StringFilter<"refreshToken"> | string
    expired_at?: DateTimeFilter<"refreshToken"> | Date | string
    created_at?: DateTimeFilter<"refreshToken"> | Date | string
    device?: StringNullableFilter<"refreshToken"> | string | null
    ipAddress?: StringNullableFilter<"refreshToken"> | string | null
  }

  export type usersCreateWithoutCategories_categories_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCategories_categories_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCategories_categories_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
  }

  export type categoriesCreateWithoutOther_categoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    users_categories_updated_byTousers: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    users_categories_user_idTousers: usersCreateNestedOneWithoutCategories_categories_user_idTousersInput
    items?: itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutOther_categoriesInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
    items?: itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutOther_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
  }

  export type categoriesCreateWithoutCategoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    users_categories_updated_byTousers: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    users_categories_user_idTousers: usersCreateNestedOneWithoutCategories_categories_user_idTousersInput
    items?: itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    items?: itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type categoriesCreateManyCategoriesInputEnvelope = {
    data: categoriesCreateManyCategoriesInput | categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCategories_categories_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCategories_categories_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
  }

  export type usersCreateWithoutCategories_categories_user_idTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCategories_categories_user_idTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCategories_categories_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCategories_categories_user_idTousersInput, usersUncheckedCreateWithoutCategories_categories_user_idTousersInput>
  }

  export type itemsCreateWithoutCategoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.itemType
    users_items_created_byTousers: usersCreateNestedOneWithoutItems_items_created_byTousersInput
    users_items_updated_byTousers: usersCreateNestedOneWithoutItems_items_updated_byTousersInput
    options?: optionsCreateNestedManyWithoutItemsInput
  }

  export type itemsUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    type: $Enums.itemType
    options?: optionsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type itemsCreateOrConnectWithoutCategoriesInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutCategoriesInput, itemsUncheckedCreateWithoutCategoriesInput>
  }

  export type itemsCreateManyCategoriesInputEnvelope = {
    data: itemsCreateManyCategoriesInput | itemsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCategories_categories_created_byTousersInput = {
    update: XOR<usersUpdateWithoutCategories_categories_created_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput>
    create: XOR<usersCreateWithoutCategories_categories_created_byTousersInput, usersUncheckedCreateWithoutCategories_categories_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategories_categories_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategories_categories_created_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput>
  }

  export type usersUpdateWithoutCategories_categories_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCategories_categories_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoriesUpsertWithoutOther_categoriesInput = {
    update: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutOther_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>
  }

  export type categoriesUpdateWithoutOther_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    users_categories_updated_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput
    users_categories_user_idTousers?: usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput
    items?: itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutOther_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type usersUpsertWithoutCategories_categories_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutCategories_categories_updated_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput>
    create: XOR<usersCreateWithoutCategories_categories_updated_byTousersInput, usersUncheckedCreateWithoutCategories_categories_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategories_categories_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategories_categories_updated_byTousersInput, usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput>
  }

  export type usersUpdateWithoutCategories_categories_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCategories_categories_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutCategories_categories_user_idTousersInput = {
    update: XOR<usersUpdateWithoutCategories_categories_user_idTousersInput, usersUncheckedUpdateWithoutCategories_categories_user_idTousersInput>
    create: XOR<usersCreateWithoutCategories_categories_user_idTousersInput, usersUncheckedCreateWithoutCategories_categories_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCategories_categories_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCategories_categories_user_idTousersInput, usersUncheckedUpdateWithoutCategories_categories_user_idTousersInput>
  }

  export type usersUpdateWithoutCategories_categories_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCategories_categories_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type itemsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: itemsWhereUniqueInput
    update: XOR<itemsUpdateWithoutCategoriesInput, itemsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<itemsCreateWithoutCategoriesInput, itemsUncheckedCreateWithoutCategoriesInput>
  }

  export type itemsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: itemsWhereUniqueInput
    data: XOR<itemsUpdateWithoutCategoriesInput, itemsUncheckedUpdateWithoutCategoriesInput>
  }

  export type itemsUpdateManyWithWhereWithoutCategoriesInput = {
    where: itemsScalarWhereInput
    data: XOR<itemsUpdateManyMutationInput, itemsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categoriesCreateWithoutItemsInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_categories_created_byTousers: usersCreateNestedOneWithoutCategories_categories_created_byTousersInput
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    users_categories_updated_byTousers: usersCreateNestedOneWithoutCategories_categories_updated_byTousersInput
    users_categories_user_idTousers: usersCreateNestedOneWithoutCategories_categories_user_idTousersInput
  }

  export type categoriesUncheckedCreateWithoutItemsInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutItemsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutItemsInput, categoriesUncheckedCreateWithoutItemsInput>
  }

  export type usersCreateWithoutItems_items_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutItems_items_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutItems_items_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutItems_items_created_byTousersInput, usersUncheckedCreateWithoutItems_items_created_byTousersInput>
  }

  export type usersCreateWithoutItems_items_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutItems_items_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutItems_items_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutItems_items_updated_byTousersInput, usersUncheckedCreateWithoutItems_items_updated_byTousersInput>
  }

  export type optionsCreateWithoutItemsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    currency?: $Enums.currencyType
    users_options_created_byTousers: usersCreateNestedOneWithoutOptions_options_created_byTousersInput
    users_options_updated_byTousers: usersCreateNestedOneWithoutOptions_options_updated_byTousersInput
    order_options?: orderOptionsCreateNestedManyWithoutOptionsInput
    units: unitsCreateNestedOneWithoutOptionsInput
  }

  export type optionsUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type optionsCreateOrConnectWithoutItemsInput = {
    where: optionsWhereUniqueInput
    create: XOR<optionsCreateWithoutItemsInput, optionsUncheckedCreateWithoutItemsInput>
  }

  export type optionsCreateManyItemsInputEnvelope = {
    data: optionsCreateManyItemsInput | optionsCreateManyItemsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutItemsInput = {
    update: XOR<categoriesUpdateWithoutItemsInput, categoriesUncheckedUpdateWithoutItemsInput>
    create: XOR<categoriesCreateWithoutItemsInput, categoriesUncheckedCreateWithoutItemsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutItemsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutItemsInput, categoriesUncheckedUpdateWithoutItemsInput>
  }

  export type categoriesUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    users_categories_updated_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput
    users_categories_user_idTousers?: usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput
  }

  export type categoriesUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type usersUpsertWithoutItems_items_created_byTousersInput = {
    update: XOR<usersUpdateWithoutItems_items_created_byTousersInput, usersUncheckedUpdateWithoutItems_items_created_byTousersInput>
    create: XOR<usersCreateWithoutItems_items_created_byTousersInput, usersUncheckedCreateWithoutItems_items_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutItems_items_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutItems_items_created_byTousersInput, usersUncheckedUpdateWithoutItems_items_created_byTousersInput>
  }

  export type usersUpdateWithoutItems_items_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutItems_items_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutItems_items_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutItems_items_updated_byTousersInput, usersUncheckedUpdateWithoutItems_items_updated_byTousersInput>
    create: XOR<usersCreateWithoutItems_items_updated_byTousersInput, usersUncheckedCreateWithoutItems_items_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutItems_items_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutItems_items_updated_byTousersInput, usersUncheckedUpdateWithoutItems_items_updated_byTousersInput>
  }

  export type usersUpdateWithoutItems_items_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutItems_items_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type optionsUpsertWithWhereUniqueWithoutItemsInput = {
    where: optionsWhereUniqueInput
    update: XOR<optionsUpdateWithoutItemsInput, optionsUncheckedUpdateWithoutItemsInput>
    create: XOR<optionsCreateWithoutItemsInput, optionsUncheckedCreateWithoutItemsInput>
  }

  export type optionsUpdateWithWhereUniqueWithoutItemsInput = {
    where: optionsWhereUniqueInput
    data: XOR<optionsUpdateWithoutItemsInput, optionsUncheckedUpdateWithoutItemsInput>
  }

  export type optionsUpdateManyWithWhereWithoutItemsInput = {
    where: optionsScalarWhereInput
    data: XOR<optionsUpdateManyMutationInput, optionsUncheckedUpdateManyWithoutItemsInput>
  }

  export type usersCreateWithoutOptions_options_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOptions_options_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOptions_options_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOptions_options_created_byTousersInput, usersUncheckedCreateWithoutOptions_options_created_byTousersInput>
  }

  export type itemsCreateWithoutOptionsInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.itemType
    categories: categoriesCreateNestedOneWithoutItemsInput
    users_items_created_byTousers: usersCreateNestedOneWithoutItems_items_created_byTousersInput
    users_items_updated_byTousers: usersCreateNestedOneWithoutItems_items_updated_byTousersInput
  }

  export type itemsUncheckedCreateWithoutOptionsInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    type: $Enums.itemType
  }

  export type itemsCreateOrConnectWithoutOptionsInput = {
    where: itemsWhereUniqueInput
    create: XOR<itemsCreateWithoutOptionsInput, itemsUncheckedCreateWithoutOptionsInput>
  }

  export type usersCreateWithoutOptions_options_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOptions_options_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOptions_options_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOptions_options_updated_byTousersInput, usersUncheckedCreateWithoutOptions_options_updated_byTousersInput>
  }

  export type orderOptionsCreateWithoutOptionsInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_order_options_created_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_created_byTousersInput
    orders: ordersCreateNestedOneWithoutOrder_optionsInput
    users_order_options_updated_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_updated_byTousersInput
    units: unitsCreateNestedOneWithoutOrder_optionsInput
  }

  export type orderOptionsUncheckedCreateWithoutOptionsInput = {
    id?: string
    order_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsCreateOrConnectWithoutOptionsInput = {
    where: orderOptionsWhereUniqueInput
    create: XOR<orderOptionsCreateWithoutOptionsInput, orderOptionsUncheckedCreateWithoutOptionsInput>
  }

  export type orderOptionsCreateManyOptionsInputEnvelope = {
    data: orderOptionsCreateManyOptionsInput | orderOptionsCreateManyOptionsInput[]
    skipDuplicates?: boolean
  }

  export type unitsCreateWithoutOptionsInput = {
    id?: string
    name: string
    symbol: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    unit_class: unit_classesCreateNestedOneWithoutUnitsInput
    order_options?: orderOptionsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutOptionsInput = {
    id?: string
    name: string
    symbol: string
    class_id: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutOptionsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutOptionsInput, unitsUncheckedCreateWithoutOptionsInput>
  }

  export type usersUpsertWithoutOptions_options_created_byTousersInput = {
    update: XOR<usersUpdateWithoutOptions_options_created_byTousersInput, usersUncheckedUpdateWithoutOptions_options_created_byTousersInput>
    create: XOR<usersCreateWithoutOptions_options_created_byTousersInput, usersUncheckedCreateWithoutOptions_options_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOptions_options_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOptions_options_created_byTousersInput, usersUncheckedUpdateWithoutOptions_options_created_byTousersInput>
  }

  export type usersUpdateWithoutOptions_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOptions_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type itemsUpsertWithoutOptionsInput = {
    update: XOR<itemsUpdateWithoutOptionsInput, itemsUncheckedUpdateWithoutOptionsInput>
    create: XOR<itemsCreateWithoutOptionsInput, itemsUncheckedCreateWithoutOptionsInput>
    where?: itemsWhereInput
  }

  export type itemsUpdateToOneWithWhereWithoutOptionsInput = {
    where?: itemsWhereInput
    data: XOR<itemsUpdateWithoutOptionsInput, itemsUncheckedUpdateWithoutOptionsInput>
  }

  export type itemsUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    categories?: categoriesUpdateOneRequiredWithoutItemsNestedInput
    users_items_created_byTousers?: usersUpdateOneRequiredWithoutItems_items_created_byTousersNestedInput
    users_items_updated_byTousers?: usersUpdateOneRequiredWithoutItems_items_updated_byTousersNestedInput
  }

  export type itemsUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
  }

  export type usersUpsertWithoutOptions_options_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutOptions_options_updated_byTousersInput, usersUncheckedUpdateWithoutOptions_options_updated_byTousersInput>
    create: XOR<usersCreateWithoutOptions_options_updated_byTousersInput, usersUncheckedCreateWithoutOptions_options_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOptions_options_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOptions_options_updated_byTousersInput, usersUncheckedUpdateWithoutOptions_options_updated_byTousersInput>
  }

  export type usersUpdateWithoutOptions_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOptions_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type orderOptionsUpsertWithWhereUniqueWithoutOptionsInput = {
    where: orderOptionsWhereUniqueInput
    update: XOR<orderOptionsUpdateWithoutOptionsInput, orderOptionsUncheckedUpdateWithoutOptionsInput>
    create: XOR<orderOptionsCreateWithoutOptionsInput, orderOptionsUncheckedCreateWithoutOptionsInput>
  }

  export type orderOptionsUpdateWithWhereUniqueWithoutOptionsInput = {
    where: orderOptionsWhereUniqueInput
    data: XOR<orderOptionsUpdateWithoutOptionsInput, orderOptionsUncheckedUpdateWithoutOptionsInput>
  }

  export type orderOptionsUpdateManyWithWhereWithoutOptionsInput = {
    where: orderOptionsScalarWhereInput
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyWithoutOptionsInput>
  }

  export type unitsUpsertWithoutOptionsInput = {
    update: XOR<unitsUpdateWithoutOptionsInput, unitsUncheckedUpdateWithoutOptionsInput>
    create: XOR<unitsCreateWithoutOptionsInput, unitsUncheckedCreateWithoutOptionsInput>
    where?: unitsWhereInput
  }

  export type unitsUpdateToOneWithWhereWithoutOptionsInput = {
    where?: unitsWhereInput
    data: XOR<unitsUpdateWithoutOptionsInput, unitsUncheckedUpdateWithoutOptionsInput>
  }

  export type unitsUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit_class?: unit_classesUpdateOneRequiredWithoutUnitsNestedInput
    order_options?: orderOptionsUpdateManyWithoutUnitsNestedInput
  }

  export type unitsUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_options?: orderOptionsUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type usersCreateWithoutOrder_options_order_options_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrder_options_order_options_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrder_options_order_options_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrder_options_order_options_created_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_created_byTousersInput>
  }

  export type optionsCreateWithoutOrder_optionsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    currency?: $Enums.currencyType
    users_options_created_byTousers: usersCreateNestedOneWithoutOptions_options_created_byTousersInput
    items: itemsCreateNestedOneWithoutOptionsInput
    users_options_updated_byTousers: usersCreateNestedOneWithoutOptions_options_updated_byTousersInput
    units: unitsCreateNestedOneWithoutOptionsInput
  }

  export type optionsUncheckedCreateWithoutOrder_optionsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
  }

  export type optionsCreateOrConnectWithoutOrder_optionsInput = {
    where: optionsWhereUniqueInput
    create: XOR<optionsCreateWithoutOrder_optionsInput, optionsUncheckedCreateWithoutOrder_optionsInput>
  }

  export type ordersCreateWithoutOrder_optionsInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
    users_orders_created_byTousers: usersCreateNestedOneWithoutOrders_orders_created_byTousersInput
    users_orders_status_changed_byTousers: usersCreateNestedOneWithoutOrders_orders_status_changed_byTousersInput
    users_orders_user_idTousers: usersCreateNestedOneWithoutOrders_orders_user_idTousersInput
  }

  export type ordersUncheckedCreateWithoutOrder_optionsInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    status_changed_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
  }

  export type ordersCreateOrConnectWithoutOrder_optionsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_optionsInput, ordersUncheckedCreateWithoutOrder_optionsInput>
  }

  export type usersCreateWithoutOrder_options_order_options_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrder_options_order_options_updated_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrder_options_order_options_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrder_options_order_options_updated_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_updated_byTousersInput>
  }

  export type unitsCreateWithoutOrder_optionsInput = {
    id?: string
    name: string
    symbol: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    unit_class: unit_classesCreateNestedOneWithoutUnitsInput
    options?: optionsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutOrder_optionsInput = {
    id?: string
    name: string
    symbol: string
    class_id: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    options?: optionsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutOrder_optionsInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutOrder_optionsInput, unitsUncheckedCreateWithoutOrder_optionsInput>
  }

  export type usersUpsertWithoutOrder_options_order_options_created_byTousersInput = {
    update: XOR<usersUpdateWithoutOrder_options_order_options_created_byTousersInput, usersUncheckedUpdateWithoutOrder_options_order_options_created_byTousersInput>
    create: XOR<usersCreateWithoutOrder_options_order_options_created_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrder_options_order_options_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrder_options_order_options_created_byTousersInput, usersUncheckedUpdateWithoutOrder_options_order_options_created_byTousersInput>
  }

  export type usersUpdateWithoutOrder_options_order_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrder_options_order_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type optionsUpsertWithoutOrder_optionsInput = {
    update: XOR<optionsUpdateWithoutOrder_optionsInput, optionsUncheckedUpdateWithoutOrder_optionsInput>
    create: XOR<optionsCreateWithoutOrder_optionsInput, optionsUncheckedCreateWithoutOrder_optionsInput>
    where?: optionsWhereInput
  }

  export type optionsUpdateToOneWithWhereWithoutOrder_optionsInput = {
    where?: optionsWhereInput
    data: XOR<optionsUpdateWithoutOrder_optionsInput, optionsUncheckedUpdateWithoutOrder_optionsInput>
  }

  export type optionsUpdateWithoutOrder_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    users_options_created_byTousers?: usersUpdateOneRequiredWithoutOptions_options_created_byTousersNestedInput
    items?: itemsUpdateOneRequiredWithoutOptionsNestedInput
    users_options_updated_byTousers?: usersUpdateOneRequiredWithoutOptions_options_updated_byTousersNestedInput
    units?: unitsUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateWithoutOrder_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type ordersUpsertWithoutOrder_optionsInput = {
    update: XOR<ordersUpdateWithoutOrder_optionsInput, ordersUncheckedUpdateWithoutOrder_optionsInput>
    create: XOR<ordersCreateWithoutOrder_optionsInput, ordersUncheckedCreateWithoutOrder_optionsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_optionsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_optionsInput, ordersUncheckedUpdateWithoutOrder_optionsInput>
  }

  export type ordersUpdateWithoutOrder_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    users_orders_created_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_created_byTousersNestedInput
    users_orders_status_changed_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_status_changed_byTousersNestedInput
    users_orders_user_idTousers?: usersUpdateOneRequiredWithoutOrders_orders_user_idTousersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
  }

  export type usersUpsertWithoutOrder_options_order_options_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutOrder_options_order_options_updated_byTousersInput, usersUncheckedUpdateWithoutOrder_options_order_options_updated_byTousersInput>
    create: XOR<usersCreateWithoutOrder_options_order_options_updated_byTousersInput, usersUncheckedCreateWithoutOrder_options_order_options_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrder_options_order_options_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrder_options_order_options_updated_byTousersInput, usersUncheckedUpdateWithoutOrder_options_order_options_updated_byTousersInput>
  }

  export type usersUpdateWithoutOrder_options_order_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrder_options_order_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type unitsUpsertWithoutOrder_optionsInput = {
    update: XOR<unitsUpdateWithoutOrder_optionsInput, unitsUncheckedUpdateWithoutOrder_optionsInput>
    create: XOR<unitsCreateWithoutOrder_optionsInput, unitsUncheckedCreateWithoutOrder_optionsInput>
    where?: unitsWhereInput
  }

  export type unitsUpdateToOneWithWhereWithoutOrder_optionsInput = {
    where?: unitsWhereInput
    data: XOR<unitsUpdateWithoutOrder_optionsInput, unitsUncheckedUpdateWithoutOrder_optionsInput>
  }

  export type unitsUpdateWithoutOrder_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    unit_class?: unit_classesUpdateOneRequiredWithoutUnitsNestedInput
    options?: optionsUpdateManyWithoutUnitsNestedInput
  }

  export type unitsUncheckedUpdateWithoutOrder_optionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: optionsUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type orderOptionsCreateWithoutOrdersInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_order_options_created_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_created_byTousersInput
    options: optionsCreateNestedOneWithoutOrder_optionsInput
    users_order_options_updated_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_updated_byTousersInput
    units: unitsCreateNestedOneWithoutOrder_optionsInput
  }

  export type orderOptionsUncheckedCreateWithoutOrdersInput = {
    id?: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsCreateOrConnectWithoutOrdersInput = {
    where: orderOptionsWhereUniqueInput
    create: XOR<orderOptionsCreateWithoutOrdersInput, orderOptionsUncheckedCreateWithoutOrdersInput>
  }

  export type orderOptionsCreateManyOrdersInputEnvelope = {
    data: orderOptionsCreateManyOrdersInput | orderOptionsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrders_orders_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrders_orders_created_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrders_orders_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrders_orders_created_byTousersInput, usersUncheckedCreateWithoutOrders_orders_created_byTousersInput>
  }

  export type usersCreateWithoutOrders_orders_status_changed_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrders_orders_status_changed_byTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrders_orders_status_changed_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrders_orders_status_changed_byTousersInput, usersUncheckedCreateWithoutOrders_orders_status_changed_byTousersInput>
  }

  export type usersCreateWithoutOrders_orders_user_idTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    refreshTokens?: refreshTokenCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrders_orders_user_idTousersInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    refreshTokens?: refreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrders_orders_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrders_orders_user_idTousersInput, usersUncheckedCreateWithoutOrders_orders_user_idTousersInput>
  }

  export type orderOptionsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: orderOptionsWhereUniqueInput
    update: XOR<orderOptionsUpdateWithoutOrdersInput, orderOptionsUncheckedUpdateWithoutOrdersInput>
    create: XOR<orderOptionsCreateWithoutOrdersInput, orderOptionsUncheckedCreateWithoutOrdersInput>
  }

  export type orderOptionsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: orderOptionsWhereUniqueInput
    data: XOR<orderOptionsUpdateWithoutOrdersInput, orderOptionsUncheckedUpdateWithoutOrdersInput>
  }

  export type orderOptionsUpdateManyWithWhereWithoutOrdersInput = {
    where: orderOptionsScalarWhereInput
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type usersUpsertWithoutOrders_orders_created_byTousersInput = {
    update: XOR<usersUpdateWithoutOrders_orders_created_byTousersInput, usersUncheckedUpdateWithoutOrders_orders_created_byTousersInput>
    create: XOR<usersCreateWithoutOrders_orders_created_byTousersInput, usersUncheckedCreateWithoutOrders_orders_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrders_orders_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrders_orders_created_byTousersInput, usersUncheckedUpdateWithoutOrders_orders_created_byTousersInput>
  }

  export type usersUpdateWithoutOrders_orders_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrders_orders_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutOrders_orders_status_changed_byTousersInput = {
    update: XOR<usersUpdateWithoutOrders_orders_status_changed_byTousersInput, usersUncheckedUpdateWithoutOrders_orders_status_changed_byTousersInput>
    create: XOR<usersCreateWithoutOrders_orders_status_changed_byTousersInput, usersUncheckedCreateWithoutOrders_orders_status_changed_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrders_orders_status_changed_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrders_orders_status_changed_byTousersInput, usersUncheckedUpdateWithoutOrders_orders_status_changed_byTousersInput>
  }

  export type usersUpdateWithoutOrders_orders_status_changed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrders_orders_status_changed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutOrders_orders_user_idTousersInput = {
    update: XOR<usersUpdateWithoutOrders_orders_user_idTousersInput, usersUncheckedUpdateWithoutOrders_orders_user_idTousersInput>
    create: XOR<usersCreateWithoutOrders_orders_user_idTousersInput, usersUncheckedCreateWithoutOrders_orders_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrders_orders_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrders_orders_user_idTousersInput, usersUncheckedUpdateWithoutOrders_orders_user_idTousersInput>
  }

  export type usersUpdateWithoutOrders_orders_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    refreshTokens?: refreshTokenUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrders_orders_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    refreshTokens?: refreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersCreateNestedManyWithoutUsers_orders_user_idTousersInput
  }

  export type usersUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    username: string
    password: string
    email: string
    business_name?: string | null
    deleted_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    categories_categories_created_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_created_byTousersInput
    categories_categories_updated_byTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_updated_byTousersInput
    categories_categories_user_idTousers?: categoriesUncheckedCreateNestedManyWithoutUsers_categories_user_idTousersInput
    items_items_created_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_created_byTousersInput
    items_items_updated_byTousers?: itemsUncheckedCreateNestedManyWithoutUsers_items_updated_byTousersInput
    options_options_created_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_created_byTousersInput
    options_options_updated_byTousers?: optionsUncheckedCreateNestedManyWithoutUsers_options_updated_byTousersInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_created_byTousersInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedCreateNestedManyWithoutUsers_order_options_updated_byTousersInput
    orders_orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_created_byTousersInput
    orders_orders_status_changed_byTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_status_changed_byTousersInput
    orders_orders_user_idTousers?: ordersUncheckedCreateNestedManyWithoutUsers_orders_user_idTousersInput
  }

  export type usersCreateOrConnectWithoutRefreshTokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRefreshTokensInput, usersUncheckedCreateWithoutRefreshTokensInput>
  }

  export type usersUpsertWithoutRefreshTokensInput = {
    update: XOR<usersUpdateWithoutRefreshTokensInput, usersUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<usersCreateWithoutRefreshTokensInput, usersUncheckedCreateWithoutRefreshTokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRefreshTokensInput, usersUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type usersUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUpdateManyWithoutUsers_orders_user_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories_categories_created_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersNestedInput
    categories_categories_updated_byTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersNestedInput
    categories_categories_user_idTousers?: categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersNestedInput
    items_items_created_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersNestedInput
    items_items_updated_byTousers?: itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersNestedInput
    options_options_created_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersNestedInput
    options_options_updated_byTousers?: optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersNestedInput
    order_options_order_options_created_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersNestedInput
    order_options_order_options_updated_byTousers?: orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersNestedInput
    orders_orders_created_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersNestedInput
    orders_orders_status_changed_byTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersNestedInput
    orders_orders_user_idTousers?: ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersNestedInput
  }

  export type unitsCreateWithoutUnit_classInput = {
    id?: string
    name: string
    symbol: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    options?: optionsCreateNestedManyWithoutUnitsInput
    order_options?: orderOptionsCreateNestedManyWithoutUnitsInput
  }

  export type unitsUncheckedCreateWithoutUnit_classInput = {
    id?: string
    name: string
    symbol: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    options?: optionsUncheckedCreateNestedManyWithoutUnitsInput
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutUnitsInput
  }

  export type unitsCreateOrConnectWithoutUnit_classInput = {
    where: unitsWhereUniqueInput
    create: XOR<unitsCreateWithoutUnit_classInput, unitsUncheckedCreateWithoutUnit_classInput>
  }

  export type unitsCreateManyUnit_classInputEnvelope = {
    data: unitsCreateManyUnit_classInput | unitsCreateManyUnit_classInput[]
    skipDuplicates?: boolean
  }

  export type unitsUpsertWithWhereUniqueWithoutUnit_classInput = {
    where: unitsWhereUniqueInput
    update: XOR<unitsUpdateWithoutUnit_classInput, unitsUncheckedUpdateWithoutUnit_classInput>
    create: XOR<unitsCreateWithoutUnit_classInput, unitsUncheckedCreateWithoutUnit_classInput>
  }

  export type unitsUpdateWithWhereUniqueWithoutUnit_classInput = {
    where: unitsWhereUniqueInput
    data: XOR<unitsUpdateWithoutUnit_classInput, unitsUncheckedUpdateWithoutUnit_classInput>
  }

  export type unitsUpdateManyWithWhereWithoutUnit_classInput = {
    where: unitsScalarWhereInput
    data: XOR<unitsUpdateManyMutationInput, unitsUncheckedUpdateManyWithoutUnit_classInput>
  }

  export type unitsScalarWhereInput = {
    AND?: unitsScalarWhereInput | unitsScalarWhereInput[]
    OR?: unitsScalarWhereInput[]
    NOT?: unitsScalarWhereInput | unitsScalarWhereInput[]
    id?: UuidFilter<"units"> | string
    name?: StringFilter<"units"> | string
    symbol?: StringFilter<"units"> | string
    class_id?: UuidFilter<"units"> | string
    to_base_factor?: DecimalFilter<"units"> | Decimal | DecimalJsLike | number | string
    is_base?: BoolFilter<"units"> | boolean
    created_at?: DateTimeFilter<"units"> | Date | string
    updated_at?: DateTimeFilter<"units"> | Date | string
  }

  export type unit_classesCreateWithoutUnitsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unit_classesUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unit_classesCreateOrConnectWithoutUnitsInput = {
    where: unit_classesWhereUniqueInput
    create: XOR<unit_classesCreateWithoutUnitsInput, unit_classesUncheckedCreateWithoutUnitsInput>
  }

  export type optionsCreateWithoutUnitsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    currency?: $Enums.currencyType
    users_options_created_byTousers: usersCreateNestedOneWithoutOptions_options_created_byTousersInput
    items: itemsCreateNestedOneWithoutOptionsInput
    users_options_updated_byTousers: usersCreateNestedOneWithoutOptions_options_updated_byTousersInput
    order_options?: orderOptionsCreateNestedManyWithoutOptionsInput
  }

  export type optionsUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
    order_options?: orderOptionsUncheckedCreateNestedManyWithoutOptionsInput
  }

  export type optionsCreateOrConnectWithoutUnitsInput = {
    where: optionsWhereUniqueInput
    create: XOR<optionsCreateWithoutUnitsInput, optionsUncheckedCreateWithoutUnitsInput>
  }

  export type optionsCreateManyUnitsInputEnvelope = {
    data: optionsCreateManyUnitsInput | optionsCreateManyUnitsInput[]
    skipDuplicates?: boolean
  }

  export type orderOptionsCreateWithoutUnitsInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    users_order_options_created_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_created_byTousersInput
    options: optionsCreateNestedOneWithoutOrder_optionsInput
    orders: ordersCreateNestedOneWithoutOrder_optionsInput
    users_order_options_updated_byTousers: usersCreateNestedOneWithoutOrder_options_order_options_updated_byTousersInput
  }

  export type orderOptionsUncheckedCreateWithoutUnitsInput = {
    id?: string
    order_id: string
    option_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsCreateOrConnectWithoutUnitsInput = {
    where: orderOptionsWhereUniqueInput
    create: XOR<orderOptionsCreateWithoutUnitsInput, orderOptionsUncheckedCreateWithoutUnitsInput>
  }

  export type orderOptionsCreateManyUnitsInputEnvelope = {
    data: orderOptionsCreateManyUnitsInput | orderOptionsCreateManyUnitsInput[]
    skipDuplicates?: boolean
  }

  export type unit_classesUpsertWithoutUnitsInput = {
    update: XOR<unit_classesUpdateWithoutUnitsInput, unit_classesUncheckedUpdateWithoutUnitsInput>
    create: XOR<unit_classesCreateWithoutUnitsInput, unit_classesUncheckedCreateWithoutUnitsInput>
    where?: unit_classesWhereInput
  }

  export type unit_classesUpdateToOneWithWhereWithoutUnitsInput = {
    where?: unit_classesWhereInput
    data: XOR<unit_classesUpdateWithoutUnitsInput, unit_classesUncheckedUpdateWithoutUnitsInput>
  }

  export type unit_classesUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type unit_classesUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type optionsUpsertWithWhereUniqueWithoutUnitsInput = {
    where: optionsWhereUniqueInput
    update: XOR<optionsUpdateWithoutUnitsInput, optionsUncheckedUpdateWithoutUnitsInput>
    create: XOR<optionsCreateWithoutUnitsInput, optionsUncheckedCreateWithoutUnitsInput>
  }

  export type optionsUpdateWithWhereUniqueWithoutUnitsInput = {
    where: optionsWhereUniqueInput
    data: XOR<optionsUpdateWithoutUnitsInput, optionsUncheckedUpdateWithoutUnitsInput>
  }

  export type optionsUpdateManyWithWhereWithoutUnitsInput = {
    where: optionsScalarWhereInput
    data: XOR<optionsUpdateManyMutationInput, optionsUncheckedUpdateManyWithoutUnitsInput>
  }

  export type orderOptionsUpsertWithWhereUniqueWithoutUnitsInput = {
    where: orderOptionsWhereUniqueInput
    update: XOR<orderOptionsUpdateWithoutUnitsInput, orderOptionsUncheckedUpdateWithoutUnitsInput>
    create: XOR<orderOptionsCreateWithoutUnitsInput, orderOptionsUncheckedCreateWithoutUnitsInput>
  }

  export type orderOptionsUpdateWithWhereUniqueWithoutUnitsInput = {
    where: orderOptionsWhereUniqueInput
    data: XOR<orderOptionsUpdateWithoutUnitsInput, orderOptionsUncheckedUpdateWithoutUnitsInput>
  }

  export type orderOptionsUpdateManyWithWhereWithoutUnitsInput = {
    where: orderOptionsScalarWhereInput
    data: XOR<orderOptionsUpdateManyMutationInput, orderOptionsUncheckedUpdateManyWithoutUnitsInput>
  }

  export type categoriesCreateManyUsers_categories_created_byTousersInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
  }

  export type categoriesCreateManyUsers_categories_updated_byTousersInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type categoriesCreateManyUsers_categories_user_idTousersInput = {
    id?: string
    parent_id?: string | null
    name: string
    image_url?: string | null
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
  }

  export type itemsCreateManyUsers_items_created_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by: string
    type: $Enums.itemType
  }

  export type itemsCreateManyUsers_items_updated_byTousersInput = {
    id?: string
    name: string
    image_url?: string | null
    cat_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    type: $Enums.itemType
  }

  export type optionsCreateManyUsers_options_created_byTousersInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by: string
    currency?: $Enums.currencyType
  }

  export type optionsCreateManyUsers_options_updated_byTousersInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    currency?: $Enums.currencyType
  }

  export type orderOptionsCreateManyUsers_order_options_created_byTousersInput = {
    id?: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by: string
  }

  export type orderOptionsCreateManyUsers_order_options_updated_byTousersInput = {
    id?: string
    order_id: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
  }

  export type ordersCreateManyUsers_orders_created_byTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    status_changed_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
  }

  export type ordersCreateManyUsers_orders_status_changed_byTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    user_id: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
  }

  export type ordersCreateManyUsers_orders_user_idTousersInput = {
    id?: string
    order_number?: bigint | number
    order_name?: string | null
    created_at?: Date | string
    status_changed_at?: Date | string | null
    discount?: Decimal | DecimalJsLike | number | string
    cash_amount?: Decimal | DecimalJsLike | number | string
    created_by: string
    status_changed_by: string
    status?: $Enums.orderStatus
    payment_type: $Enums.paymentType
  }

  export type refreshTokenCreateManyUserInput = {
    id?: string
    token_hash: string
    expired_at: Date | string
    created_at?: Date | string
    device?: string | null
    ipAddress?: string | null
  }

  export type categoriesUpdateWithoutUsers_categories_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    users_categories_updated_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput
    users_categories_user_idTousers?: usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput
    items?: itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsers_categories_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    items?: itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUpdateWithoutUsers_categories_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    users_categories_user_idTousers?: usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput
    items?: itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsers_categories_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    items?: itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUpdateWithoutUsers_categories_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    users_categories_updated_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput
    items?: itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutUsers_categories_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    items?: itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutUsers_categories_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type itemsUpdateWithoutUsers_items_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    categories?: categoriesUpdateOneRequiredWithoutItemsNestedInput
    users_items_updated_byTousers?: usersUpdateOneRequiredWithoutItems_items_updated_byTousersNestedInput
    options?: optionsUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateWithoutUsers_items_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    options?: optionsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateManyWithoutUsers_items_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
  }

  export type itemsUpdateWithoutUsers_items_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    categories?: categoriesUpdateOneRequiredWithoutItemsNestedInput
    users_items_created_byTousers?: usersUpdateOneRequiredWithoutItems_items_created_byTousersNestedInput
    options?: optionsUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateWithoutUsers_items_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    options?: optionsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateManyWithoutUsers_items_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
  }

  export type optionsUpdateWithoutUsers_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    items?: itemsUpdateOneRequiredWithoutOptionsNestedInput
    users_options_updated_byTousers?: usersUpdateOneRequiredWithoutOptions_options_updated_byTousersNestedInput
    order_options?: orderOptionsUpdateManyWithoutOptionsNestedInput
    units?: unitsUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateWithoutUsers_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateManyWithoutUsers_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type optionsUpdateWithoutUsers_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    users_options_created_byTousers?: usersUpdateOneRequiredWithoutOptions_options_created_byTousersNestedInput
    items?: itemsUpdateOneRequiredWithoutOptionsNestedInput
    order_options?: orderOptionsUpdateManyWithoutOptionsNestedInput
    units?: unitsUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateWithoutUsers_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateManyWithoutUsers_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type orderOptionsUpdateWithoutUsers_order_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    options?: optionsUpdateOneRequiredWithoutOrder_optionsNestedInput
    orders?: ordersUpdateOneRequiredWithoutOrder_optionsNestedInput
    users_order_options_updated_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_updated_byTousersNestedInput
    units?: unitsUpdateOneRequiredWithoutOrder_optionsNestedInput
  }

  export type orderOptionsUncheckedUpdateWithoutUsers_order_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsUncheckedUpdateManyWithoutUsers_order_options_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsUpdateWithoutUsers_order_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_order_options_created_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_created_byTousersNestedInput
    options?: optionsUpdateOneRequiredWithoutOrder_optionsNestedInput
    orders?: ordersUpdateOneRequiredWithoutOrder_optionsNestedInput
    units?: unitsUpdateOneRequiredWithoutOrder_optionsNestedInput
  }

  export type orderOptionsUncheckedUpdateWithoutUsers_order_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsUncheckedUpdateManyWithoutUsers_order_options_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUpdateWithoutUsers_orders_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUpdateManyWithoutOrdersNestedInput
    users_orders_status_changed_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_status_changed_byTousersNestedInput
    users_orders_user_idTousers?: usersUpdateOneRequiredWithoutOrders_orders_user_idTousersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsers_orders_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsers_orders_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
  }

  export type ordersUpdateWithoutUsers_orders_status_changed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUpdateManyWithoutOrdersNestedInput
    users_orders_created_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_created_byTousersNestedInput
    users_orders_user_idTousers?: usersUpdateOneRequiredWithoutOrders_orders_user_idTousersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsers_orders_status_changed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsers_orders_status_changed_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
  }

  export type ordersUpdateWithoutUsers_orders_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUpdateManyWithoutOrdersNestedInput
    users_orders_created_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_created_byTousersNestedInput
    users_orders_status_changed_byTousers?: usersUpdateOneRequiredWithoutOrders_orders_status_changed_byTousersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsers_orders_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsers_orders_user_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: BigIntFieldUpdateOperationsInput | bigint | number
    order_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cash_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_by?: StringFieldUpdateOperationsInput | string
    status_changed_by?: StringFieldUpdateOperationsInput | string
    status?: EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus
    payment_type?: EnumpaymentTypeFieldUpdateOperationsInput | $Enums.paymentType
  }

  export type refreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type refreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesCreateManyCategoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    user_id: string
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string
    updated_by: string
    deleted_at?: Date | string | null
  }

  export type itemsCreateManyCategoriesInput = {
    id?: string
    name: string
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    type: $Enums.itemType
  }

  export type categoriesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_categories_created_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_created_byTousersNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    users_categories_updated_byTousers?: usersUpdateOneRequiredWithoutCategories_categories_updated_byTousersNestedInput
    users_categories_user_idTousers?: usersUpdateOneRequiredWithoutCategories_categories_user_idTousersNestedInput
    items?: itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    items?: itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: StringFieldUpdateOperationsInput | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type itemsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    users_items_created_byTousers?: usersUpdateOneRequiredWithoutItems_items_created_byTousersNestedInput
    users_items_updated_byTousers?: usersUpdateOneRequiredWithoutItems_items_updated_byTousersNestedInput
    options?: optionsUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
    options?: optionsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type itemsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    type?: EnumitemTypeFieldUpdateOperationsInput | $Enums.itemType
  }

  export type optionsCreateManyItemsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    unit_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
  }

  export type optionsUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    users_options_created_byTousers?: usersUpdateOneRequiredWithoutOptions_options_created_byTousersNestedInput
    users_options_updated_byTousers?: usersUpdateOneRequiredWithoutOptions_options_updated_byTousersNestedInput
    order_options?: orderOptionsUpdateManyWithoutOptionsNestedInput
    units?: unitsUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateManyWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unit_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type orderOptionsCreateManyOptionsInput = {
    id?: string
    order_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_order_options_created_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_created_byTousersNestedInput
    orders?: ordersUpdateOneRequiredWithoutOrder_optionsNestedInput
    users_order_options_updated_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_updated_byTousersNestedInput
    units?: unitsUpdateOneRequiredWithoutOrder_optionsNestedInput
  }

  export type orderOptionsUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsUncheckedUpdateManyWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsCreateManyOrdersInput = {
    id?: string
    option_id: string
    unit_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type orderOptionsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_order_options_created_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_created_byTousersNestedInput
    options?: optionsUpdateOneRequiredWithoutOrder_optionsNestedInput
    users_order_options_updated_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_updated_byTousersNestedInput
    units?: unitsUpdateOneRequiredWithoutOrder_optionsNestedInput
  }

  export type orderOptionsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    unit_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type unitsCreateManyUnit_classInput = {
    id?: string
    name: string
    symbol: string
    to_base_factor: Decimal | DecimalJsLike | number | string
    is_base?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type unitsUpdateWithoutUnit_classInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: optionsUpdateManyWithoutUnitsNestedInput
    order_options?: orderOptionsUpdateManyWithoutUnitsNestedInput
  }

  export type unitsUncheckedUpdateWithoutUnit_classInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: optionsUncheckedUpdateManyWithoutUnitsNestedInput
    order_options?: orderOptionsUncheckedUpdateManyWithoutUnitsNestedInput
  }

  export type unitsUncheckedUpdateManyWithoutUnit_classInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    to_base_factor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_base?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type optionsCreateManyUnitsInput = {
    id?: string
    name: string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    item_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
    currency?: $Enums.currencyType
  }

  export type orderOptionsCreateManyUnitsInput = {
    id?: string
    order_id: string
    option_id: string
    quantity: Decimal | DecimalJsLike | number | string
    price_per_base_unit: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type optionsUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    users_options_created_byTousers?: usersUpdateOneRequiredWithoutOptions_options_created_byTousersNestedInput
    items?: itemsUpdateOneRequiredWithoutOptionsNestedInput
    users_options_updated_byTousers?: usersUpdateOneRequiredWithoutOptions_options_updated_byTousersNestedInput
    order_options?: orderOptionsUpdateManyWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
    order_options?: orderOptionsUncheckedUpdateManyWithoutOptionsNestedInput
  }

  export type optionsUncheckedUpdateManyWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    currency?: EnumcurrencyTypeFieldUpdateOperationsInput | $Enums.currencyType
  }

  export type orderOptionsUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_order_options_created_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_created_byTousersNestedInput
    options?: optionsUpdateOneRequiredWithoutOrder_optionsNestedInput
    orders?: ordersUpdateOneRequiredWithoutOrder_optionsNestedInput
    users_order_options_updated_byTousers?: usersUpdateOneRequiredWithoutOrder_options_order_options_updated_byTousersNestedInput
  }

  export type orderOptionsUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type orderOptionsUncheckedUpdateManyWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    option_id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_base_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}