// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainStringArray, isStringArray } from "../../../core/types/StringArray";

expect.extend(
    {
        toBeStringArray (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isStringArray(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be string[]`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be string[]: ${explainStringArray(received)}`);
            }
        }
    }
);
