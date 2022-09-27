import { createRouter } from "./context";
import { z } from "zod";
// import Surreal from "surrealdb.js/dist/types/index";
import Surreal from 'surrealdb.js';
const sdb = new Surreal(`${process.env.SURREALDB_URL}`);

export const surrealApi = createRouter()
.query("init", {
  async resolve() {
    // Signin to a scope from the browser
    try {
      await sdb.use(`${process.env.SURREALDB_NS}`, `${process.env.SURREALDB_DB}`);

      await sdb.signin({
        user: `${process.env.SURREALDB_USER}`,
        pass: `${process.env.SURREALDB_PASS}`,
      })

      const r = await sdb.query('INFO FOR DB;');
      // await sdb.live('person') ???????????????

      // Create a new person with a random id
      // await sdb.create("person", {
      //   title: 'Founder & CEO',
      //   name: {
      //     first: 'Tobie',
      //     last: 'Morgan Hitchcock',
      //   },
      //   marketing: true,
      //   identifier: Math.random().toString(36).substr(2, 10),
      // });

      // // Update a person record with a specific id
      // const updated = await sdb.change("person:jaime", {
      //   marketing: true,
      // });

      // // Select all people records
      // const people = await sdb.select("person");

      // // Perform a custom advanced query
      // const groups = await sdb.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
      //   tb: 'person',
      // });

      return {
        msg: {
          request: "sdb.query('INFO FOR DB;');",
          response: r
        }
      };
    } catch (error) {
      console.log(error)
    }

  },
})
.query("create_person", {
  input: z.object({ 
    title: z.string(), 
    name: z.object({
      first: z.string(),
      last: z.string()
    }), 
    marketing: z.boolean().default(false),
    identifier: z.string().nullish().default(Math.random().toString(36).substr(2, 10))
  }),
  async resolve({input}) {
    // Signin to a scope from the browser
    try {
      await sdb.use('test', 'test');

      await sdb.signin({
        user: 'frootw',
        pass: 'wt44rf',
      })

      // const r = await sdb.query('INFO FOR DB;');
      // console.log(r)

      // Create a new person with a random id
      const res = await sdb.create("person", {
        title: input.title,
        name: {
          first: input.name.first,
          last: input.name.last,
        },
        marketing: input.marketing,
        identifier: input.identifier,
      });

      // // Update a person record with a specific id
      // const updated = await sdb.change("person:jaime", {
      //   marketing: true,
      // });

      

      return {
        msg: {
          request: `sdb.create("person", {
            title: $title,
            name: {
              first: $name.first,
              last: $name.last,
            },
            marketing: $marketing,
            identifier: $identifier,
          });`,
          result: res
        }
      };
    } catch (error) {
      console.log(error)
    }

  },
})
.query("change_person", {
  input: z.object({ 
    id: z.string(),
  }),
  async resolve({input}) {
    // Signin to a scope from the browser
    try {
      await sdb.use('test', 'test');

      await sdb.signin({
        user: 'frootw',
        pass: 'wt44rf',
      })

      const person_id = `person:${input.id}`;
      // Update a person record with a specific id
      const res = await sdb.change(person_id, {
        marketing: true,
      });

      return {
        msg: {
          request: `sdb.change(person:$id , { marketing: true });`,
          result: res
        }
      };
    } catch (error) {
      console.log(error)
    }

  },
})
.query("get_all", {
  async resolve() {
    // Signin to a scope from the browser
    try {
      await sdb.use('test', 'test');

      await sdb.signin({
        user: 'frootw',
        pass: 'wt44rf',
      })
      // Select all people records
      const res = await sdb.select('person');

      // // Update a person record with a specific id
      // const updated = await sdb.change("person:jaime", {
      //   marketing: true,
      // });


      // // Perform a custom advanced query
      // const groups = await sdb.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
      //   tb: 'person',
      // });

      return {
        msg: {
          request: `sdb.select('person');`,
          result: res
        }
      };
    } catch (error) {
      console.log(error)
    }

  },
})
.query("get_one", {
  async resolve() {
    // Signin to a scope from the browser
    try {
      await sdb.use('test', 'test');

      await sdb.signin({
        user: 'frootw',
        pass: 'wt44rf',
      })
      // Select all people records
      const res = await sdb.query("SELECT * FROM person LIMIT 1");

      return {
        msg: {
          request: `sdb.query('SELECT * FROM person LIMIT 1');`,
          result: res
        }
      };
    } catch (error) {
      console.log(error)
    }

  },
})
.query("get_group", {
  async resolve() {
    // Signin to a scope from the browser
    try {
      await sdb.use('test', 'test');

      await sdb.signin({
        user: 'frootw',
        pass: 'wt44rf',
      })
      // Select all people records
      // Perform a custom advanced query
      const groups = await sdb.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
        tb: 'person',
      });

      // // Update a person record with a specific id
      // const updated = await sdb.change("person:jaime", {
      //   marketing: true,
      // });


      // // Perform a custom advanced query
      // const groups = await sdb.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
      //   tb: 'person',
      // });

      return {
        msg: {
          request: `sdb.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', { tb: 'person' })`,
          result: groups
        }
      };
    } catch (error) {
      console.log(error)
    }

  },
});
