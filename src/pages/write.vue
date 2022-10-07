<script setup lang="ts">
import dayjs from "dayjs";
import { useStore as useLetterStore } from "@/store/letter";
import Dialog from "@/components/Dialog"
const route = useRoute();
const letterStore = useLetterStore();
useHead({
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


// 无标题
// Dialog('500 服務器錯誤，請稍候再試!');
// 有标题


const letter = reactive<any>({
  title:"送你一封信",
  pro:"",
  wish:"",
  message: "",
  name: "",
  email: "",
  date:0
})
function send() {
  letterStore.letter = letter
  Dialog('输入几天后发送', { title: '选择送达日期' });
}
</script>
<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose">
        <h1>来写一封信吧📪</h1>
        <label for="email">标题:</label>
        <input v-model="letter.title" type="text" name="name" id="name" />
      </header>
      <main>
        <div class="xl:w-[530px]  mx-auto w-[80%]"> 
          <div id="form_wrap">
            <form>
              <label for="email">信头:</label>
              <input v-model="letter.pro" type="text" name="name" id="name" />
              <label for="email">内容: </label>
              <textarea
                name="message"
                v-model="letter.message"
                id="message"
              ></textarea>
              <label for="email">祝福语:</label>
              <input v-model="letter.wish" type="text" name="name" id="name" />
              <label for="name">你的姓名 </label>
              <input v-model="letter.name" type="text" name="name" id="name" />
              <label for="email">对方邮箱 </label>
              <input v-model="letter.email" type="text" name="email" id="email" />
              <text class="send" @click="send">Now, I send, thanks!</text>
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

<style>
.letter{
  width: 530px;
  margin: 0 auto;
}

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

#form_wrap.hide:after,
#form_wrap.hide:before {
  display: none;
}

#form_wrap:hover {
  height: 900px;
  top: -200px;
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

#form_wrap .send {
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

#form_wrap:hover .send {
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
