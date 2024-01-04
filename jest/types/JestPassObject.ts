// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { explainRegularObject, isRegularObject } from "../../../core/types/RegularObject";
import { explainNoOtherKeysInDevelopment, hasNoOtherKeysInDevelopment } from "../../../core/types/OtherKeys";
import { isString } from "../../../core/types/String";
import { explainBoolean, isBoolean } from "../../../core/types/Boolean";
import { explain, explainProperty } from "../../../core/types/explain";
import { explainFunction, isFunction } from "../../../core/types/Function";

export interface JestPassObject {
    readonly pass : boolean;
    readonly message : () => string;
}

export function createJestPassObject (
    pass: boolean,
    message: (() => string) | string
) : JestPassObject {
    return {
        pass,
        message: isString(message) ? () => message : message
    };
}

export function isJestPassObject (value: unknown) : value is JestPassObject {
    return (
        isRegularObject(value)
        && hasNoOtherKeysInDevelopment(value, [
            'pass',
            'message'
        ])
        && isBoolean(value?.pass)
        && isFunction(value?.message)
    );
}

export function explainJestPassObject (value: any) : string {
    return explain(
        [
            explainRegularObject(value),
            explainNoOtherKeysInDevelopment(value, [
                'pass',
                'message'
            ])
            , explainProperty("pass", explainBoolean(value?.pass))
            , explainProperty("message", explainFunction(value?.message))
        ]
    );
}

export function stringifyJestPassObject (value : JestPassObject) : string {
    return `JestPassObject(${value})`;
}

export function parseJestPassObject (value: unknown) : JestPassObject | undefined {
    if (isJestPassObject(value)) return value;
    return undefined;
}
