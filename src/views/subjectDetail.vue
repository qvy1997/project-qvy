<template>
  <div class="bg-subject">
    <div class="wrapper container page-subject-detail">
      <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
      <div class="columns">
        <div class="column is-3 text-center column-left">
          <div class="code-subject">
            <p class="title-small">รหัสวิชา</p>
            <h1> {{ detailSubjects.codeSubject }}</h1>
          </div>
          <div class="image-teacher">
            <img height="160px" width="160px" :src="imgTeacher" alt="image-teacher">
          </div>
          <div class="name-teacher">
            <p class="title-small">อาจารย์ผู้สอน</p>
            <h3> {{ detailSubjects.teacher }} </h3>
          </div>
          <div class="credit">
            <p class="title-small">จำนวนหน่วยกิต</p>
            <h3> {{ detailSubjects.credit }} </h3>
          </div>
          <div class="note">
            <p class="title-small">หมายเหตุ</p>
            <h3> {{ detailSubjects.note }} </h3>
          </div>
        </div>
        <div class="column is-9 text-center column-right">
          <div class="name-subject">
            <p class="title-small">ชื่อวิชา</p>
            <h1> {{ detailSubjects.nameSubject }} </h1>
          </div>
          <div class="detail-subject">
            <p class="title-small">รายละเอียดวิชา</p>
            <h2> {{ detailSubjects.detailSubject }} </h2>
          </div>
          <div class="book-name">
            <p class="title-small">หนังสือเรียนที่แนะนำ</p>
            <h1> {{ detailSubjects.bookRecom }} </h1>
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
      code: '',
      class: '',
      detailSubjects: [],
      imgTeacher: '',
      isLoading: false
    }
  },
  async mounted () {
    this.code = this.$route.query.code
    this.class = this.$route.query.class
    const dataAxios = await axios({
      method: 'POST',
      url: 'https://us-central1-backend-qvy.cloudfunctions.net/backendAPI/getSomeSubject',
      data: {
        codeSubject: this.code,
        student: this.class
      }
    })
    this.detailSubjects = dataAxios.data.data
    this.imgTeacher = this.detailSubjects.imageTeacher
  }
}
</script>
