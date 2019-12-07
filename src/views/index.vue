<template>
  <div class="wrapper container">
    <div class="columns">
      <div class="column is-3 text-center">
        <div class="logo-side">
          <img src="../assets/image/logoSide.jpg" width="115px" height="115px" alt="side-logo">
        </div>
        <div class="class-year">
          <ul class="menu-class">
            <li @click="selectClass(classStudents.index)" v-for="(classStudents, index) in classStudent"
            :key="index">
              {{ classStudents.text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="column is-9 frame-article">
        <div class="article-content text-center">
          <h2 class="text-h2">รายวิชา</h2>
            <br />
          <div class="subject" v-for="(subjects, index) in dataSubject"
          :key="index">
            <router-link :to="{ path: linkToDetail(subjects.codeSubject, subjects.class ) }">
              {{ subjects.nameSubject }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataSubject: [],
      classStudent: [
        {
          text: 'ปีการศึกษาที่ 1',
          index: 'student1'
        },
        {
          text: 'ปีการศึกษาที่ 2',
          index: 'student2'
        },
        {
          text: 'ปีการศึกษาที่ 3',
          index: 'student3'
        },
        {
          text: 'ปีการศึกษาที่ 4',
          index: 'student4'
        }
      ]
    }
  },
  methods: {
    linkToDetail (codeBook, student) {
      return `subject/?code=${codeBook}&class=${student}`
    },
    async selectClass (index) {
      const dataAxios = await axios({
        method: 'POST',
        url: 'https://us-central1-backend-qvy.cloudfunctions.net/backendAPI/getSubject',
        data: {
          student: index
        }
      })
      console.log(dataAxios)
      this.dataSubject = dataAxios.data.dataAll
    }
  },
  async mounted () {
    const dataAxios = await axios({
      method: 'POST',
      url: 'https://us-central1-backend-qvy.cloudfunctions.net/backendAPI/getSubject',
      data: {
        student: 'student1'
      }
    })
    this.dataSubject = dataAxios.data.dataAll
    this.dataCodeSubject = dataAxios.data.dataID
  }
}
</script>
