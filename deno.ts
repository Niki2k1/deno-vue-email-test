import { config } from 'npm:vue-email@0.6.3/compiler'

const vueEmail = config("./templates", {
  verbose: false,
  options: {
    baseUrl: "https://vue-email-demo.vercel.app/",
  },
});

const template = await vueEmail.render("example.vue", {
  props: {
    username: "John Doe",
  },
});

console.log(template);