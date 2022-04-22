exports.up = function (knex) {
  return (
    knex.schema
      //   table 1
      // - [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:
      .createTable("project", (tbl) => {
        //   - [ ] `` - primary key
        tbl.increments("project_id");
        //   - [ ] `` - required
        tbl.string("project_name").notNullable();
        //   - [ ] `` - optional
        tbl.string("project_description");
        //   - [ ] `` - the database defaults it to `false` (integer 0) if not provided
        tbl.boolean("project_completed");
      })

      //   table 2
      // - [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:
      .createTable("resource", (tbl) => {
        //   - [ ] `` - primary key
        tbl.increments("resource_id");
        //   - [ ] `` - required and unique
        tbl.string("resource_name").notNullable().unique();
        //   - [ ] `` - optional
        tbl.string("resource_description");
      })

      //   table 3
      // - [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:
      .createTable("task", (tbl) => {
        //   - [ ] `` - primary key
        tbl.increments("task_id");
        //   - [ ] `` - required
        tbl.string("task_description").notNullable();
        //   - [ ] `` - optional
        tbl.string("task_notes");
        //   - [ ] `` - the database defaults it to`false`(integer 0) if not provided
        tbl.boolean("task_completed");
        //   - [ ] `` - required and points to an actual `project_id` in the `projects` table
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects");
      })

    // - [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.
  );
};

exports.down = function (knex) {
  return (
    knex.schema
      //   **project**
      .dropTableIfExists("project")
      //   **resource**
      .dropTableIfExists("resource")
      //   **task**
      .dropTableIfExists("task")
  );
};
