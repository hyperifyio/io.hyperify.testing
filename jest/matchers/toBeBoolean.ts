// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainBoolean, isBoolean } from "../../../core/types/Boolean";

expect.extend(
    {
        toBeBoolean (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isBoolean(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a boolean`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a boolean: ${explainBoolean(received)}`);
            }
        }
    }
);
