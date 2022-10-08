<script setup lang="ts">
import dayjs from "dayjs";
const route = useRoute();
const router = useRouter();
useHead({
  title:'送ta一封信',
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: "og:title",
      content: route.meta.title,
    },
    {
      name: "twitter:title",
      content: route.meta.title,
    },
  ],
});

const VERSION = import.meta.env.VITE_APP_VERSION;
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
const fistMeet = "2021年2月16日";
const loverday = dayjs(Date()).diff(dayjs("2021-2-16"), "days");

function to() {
  router.push("/write")
}
</script>
<template>
  <div class="relative py-8" @click="to">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>我们相遇{{ loverday }}天💕</h1>
      </header>
      <main>
        <div class="xl:w-[530px]  mx-auto w-[80%]"> 
          <div id="form_wrap" class="font-serif">
            <form>
              <h1 class="text-center font-extrabold font-sans">送ta一封信</h1>
              <h1 class="text-center">全页面点击跳转</h1>
            </form>
        </div>
        </div>
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>
          lover by
          <a class="underline" href="https://xn--1rwt7c.online/">@DROWNING</a>
          &copy; 2022-{{ thisYear }}.
          <template v-if="BUILD_DATE">
            Site built {{ BUILD_DATE.toLocaleDateString() }}.
          </template>
          <template v-else> Development mode. </template>
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>


#form_wrap {
  overflow: hidden;
  height: 470px;
  position: relative;
  top: 0px;
  -webkit-transition: all 1s ease-in-out 0.3s;
  -moz-transition: all 1s ease-in-out 0.3s;
  -o-transition: all 1s ease-in-out 0.3s;
  transition: all 1s ease-in-out 0.3s;
}

#form_wrap:before {
  content: "";
  position: absolute;
  box-sizing: content-box;
  bottom: 128px;
  /* left: 0px; */
  background-size: 100%;
  background: url("@/assets/before.png") center/100% auto no-repeat;
  width: 100%;
  height: 316px;
}
@media screen and (max-width: 650px) {
  #form_wrap:before {
    bottom: calc(100vw/6);
  }
}
#form_wrap:after {
  content: "";
  position: absolute;
  bottom: 0px;
  background-size: 100%;
  background:url("@/assets/after.png") center/100% auto no-repeat;
  /* background: url("@/assets/after.png"); */
  width: 100%;
  height: 260px;
}

form {
  background: #f7f2ec url("@/assets/letter_bg.png");
  position: relative;
  top: 200px;
  overflow: hidden;
  height: 200px;
  width: 80%;
  margin: 0px auto;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  box-shadow: 0px 0px 3px #9d9d9d, inset 0px 0px 27px #fff;
  -moz-box-shadow: 0px 0px 3px #9d9d9d, inset 0px 0px 14px #fff;
  -webkit-box-shadow: 0px 0px 3px #9d9d9d, inset 0px 0px 27px #fff;
  -webkit-transition: all 1s ease-in-out 0.3s;
  -moz-transition: all 1s ease-in-out 0.3s;
  -o-transition: all 1s ease-in-out 0.3s;
  transition: all 1s ease-in-out 0.3s;
}

#form_wrap:hover form {
  height: 530px;
}

label {
  margin: 11px 20px 0 0;
  font-size: 16px;
  color: #b3aba1;
  text-transform: uppercase;
  text-shadow: 0px 1px 0px #fff;
}

input[type="text"],
textarea {
  font: 14px normal normal uppercase helvetica, arial, serif;
  color: #7c7873;
  background: none;
  width: 380px;
  height: 36px;
  padding: 0px 10px;
  margin: 0 0 10px 0;
  border: 1px solid #f8f5f1;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: inset 0px 0px 1px #726959;
  -webkit-box-shadow: inset 0px 0px 1px #b3a895;
  box-shadow: inset 0px 0px 1px #b3a895;
}

textarea {
  height: 80px;
  padding-top: 14px;
}

textarea:focus,
input[type="text"]:focus {
  background: rgba(255, 255, 255, 0.35);
}

#form_wrap input[type="submit"] {
  position: relative;
  font-family: "YanoneKaffeesatzRegular";
  font-size: 24px;
  color: #7c7873;
  text-shadow: 0 1px 0 #fff;
  width: 100%;
  text-align: center;
  opacity: 0;
  background: none;
  cursor: pointer;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-transition: opacity 0.6s ease-in-out 0s;
  -moz-transition: opacity 0.6s ease-in-out 0s;
  -o-transition: opacity 0.6s ease-in-out 0s;
  transition: opacity 0.6s ease-in-out 0s;
}

#form_wrap:hover input[type="submit"] {
  z-index: 1;
  opacity: 1;
  -webkit-transition: opacity 0.5s ease-in-out 1.3s;
  -moz-transition: opacity 0.5s ease-in-out 1.3s;
  -o-transition: opacity 0.5s ease-in-out 1.3s;
  transition: opacity 0.5s ease-in-out 1.3s;
}

#form_wrap:hover input:hover[type="submit"] {
  color: #435c70;
}
</style>
