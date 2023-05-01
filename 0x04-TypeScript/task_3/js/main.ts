/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

export const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

export const newRowID: RowID = CRUD.insertRow(row);

export const updatedRow: RowElement = CRUD.updateRow(...row, age: 23);

CRUD.updateRow(newRowID, updateRow);

CRUD.deleteRow(newRowID);
