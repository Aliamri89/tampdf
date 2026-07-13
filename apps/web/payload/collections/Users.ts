import type { CollectionConfig } from "payload";

/**
 * Single-administrator auth collection. Payload's built-in "create first
 * user" bootstrap flow creates the one account when none exist; the
 * `create` access check then blocks any further account creation (via the
 * admin UI or the REST/local API), which is what "one administrator
 * account" means for this project — no roles, no invites, no self-signup.
 */
export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: { en: "User", ar: "مستخدم" },
    plural: { en: "Users", ar: "المستخدمون" },
  },
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    create: async ({ req }) => {
      const { totalDocs } = await req.payload.count({ collection: "users" });
      return totalDocs === 0;
    },
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    // Never allow deleting the sole admin account through the API — the
    // only way out would be direct database access.
    delete: () => false,
  },
  fields: [],
};
