import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  book: {
    id: primaryKey(() => Math.floor(Math.random() * 9999)),
    title: faker.commerce.productName,
    imageUrl: faker.image.image(),
  },
});
