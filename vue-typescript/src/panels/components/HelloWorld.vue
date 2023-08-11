<template>
  <div>
    <input type="text" v-model="myCode"> <br>
    <input type="submit" >
    {{ list }}
  </div>

</template>
<script setup lang="ts">
import {$ref, RefValue} from "vue/macros";
import Helloworld from "@/users/components/Helloworld";
let myCode: RefValue<number | undefined> = $ref()
let list = $ref({})
const heloo = new Helloworld();
list = heloo.reuslt()
</script>
