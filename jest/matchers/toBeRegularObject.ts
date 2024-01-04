// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainRegularObject, isRegularObject } from "../../../core/types/RegularObject";

expect.extend(
    {
        toBeRegularObject (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isRegularObject(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a regular object`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a regular object: ${explainRegularObject(received)}`);
            }
        }
    }
);
