// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainNumberArray, isNumberArray } from "../../../core/types/NumberArray";

expect.extend(
    {
        toBeNumberArray (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isNumberArray(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be number[]`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a number[]: ${explainNumberArray(received)}`);
            }
        }
    }
);
