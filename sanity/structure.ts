import type { StructureResolver } from "sanity/structure";
import { singletons } from "./schemas";

/**
 * Vaste menu-items in de volgorde van de pagina. Er is geen "nieuw document"-
 * knop en geen documentenlijst: van elk type bestaat precies één document,
 * met een id dat gelijk is aan het type.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website")
    .items(
      singletons.map((item) =>
        S.listItem()
          .title(`${item.icoon}  ${item.titel}`)
          .id(item.type)
          .child(
            S.document()
              .schemaType(item.type)
              .documentId(item.type)
              .title(item.titel),
          ),
      ),
    );
