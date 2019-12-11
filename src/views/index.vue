<template>
  <div class="wrapper container">
    <div class="columns">
      <div class="column is-3 text-center">
        <div class="logo-side">
          <img src="../assets/image/logoSide.jpg" width="185px" height="150px" alt="side-logo">
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
          <h2 class="text-h2">รายวิชาประจำปีการศึกษา</h2>
          <div class="subject" v-for="(subjects, index) in dataSubject"
          :key="index">
            <router-link :to="{ path: linkToDetail(subjects.codeSubject, subjects.classYear) }">
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
    linkToDetail (codeSubject, student) {
      return `subject/?code=${codeSubject}&class=${student}`
    },
    async selectClass (index) {
      const dataAxios = await axios({
        method: 'POST',
        url: 'https://us-central1-backend-qvy.cloudfunctions.net/backendAPI/getSubject',
        data: {
          student: index
        }
      })
      this.dataSubject = dataAxios.data.dataAll
      console.log(this.dataSubject)
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
