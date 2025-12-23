import type { Db } from "../db/client";
import { sweetBreadTable } from "../db/schema";
import type { SweetBread } from "../domain/sweetBread";

export class SweetBreadService {
  constructor(private db: Db) {}

  public async createSweetBread(
    sweetBread: Omit<SweetBread, "id">,
  ): Promise<SweetBread> {
    return await this.db
      .insert(sweetBreadTable)
      .values({
        name: sweetBread.name,
        type: sweetBread.type,
        weight_in_grams: sweetBread.weight_in_grams,
        brand: sweetBread.brand,
        tier: sweetBread.tier,
      })
      .returning()
      .then((x) => x[0]!);
  }

  public getAllSweetBread(): Promise<SweetBread[]> {
    return this.db.select().from(sweetBreadTable);
  }
}
