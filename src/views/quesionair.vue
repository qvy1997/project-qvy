<template>
  <div class="quesionair bg-background">
  <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <div class="container">
      <div class="wrapper">
        <div class="block-quesion">
          <h1>แบบสอบถามความพึงพอใจแอปพลิเคชัน Sci-Com Assistance</h1>
          <h3>แบบสอบถามนี้มีวัตถุประสงค์เพื่อประเมินความพึงพอใจของผู้ใช้บริการแอปพลิเคชัน
            Sci-Com Assistance  ผลการประเมินและข้อเสนอแนะที่ได้จากแบบสอบถามนี้จะถูก
            นำไปประมวลผลในภาพรวม และนำผลไปใช้ในการปรับปรุงให้มีประสิทธิภาพมากยิ่งขึ้นต่อไป
          </h3>
          <h4><span class="color-red">* จำเป็น</span></h4>
        </div>

        <div class="block-quesion">
          <h2>เนื้อหามีความถูกต้อง <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesTrue')}"
              :message="errors.first('quesTrue')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesTrue"
                  :native-value="answer.value"
                  name="quesTrue"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>เนื้อหามีสมบูรณ์ ครบถ้วน <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesComplete')}"
              :message="errors.first('quesComplete')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesComplete"
                  :native-value="answer.value"
                  name="quesComplete"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>เนื้อหามีความกระทัดรัด เข้าใจง่าย <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesEasy')}"
              :message="errors.first('quesEasy')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesEasy"
                  :native-value="answer.value"
                  name="quesEasy"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>การจัดหมวดหมู่รายการได้ชัดเจนและเหมาะสม <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('categorieType')}"
              :message="errors.first('categorieType')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="categorieType"
                  :native-value="answer.value"
                  name="categorieType"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>ผู้ใช้สามารถใช้งานได้สะดวก รวดเร็ว <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesConv')}"
              :message="errors.first('quesConv')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesConv"
                  :native-value="answer.value"
                  name="quesConv"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>มีการออกแบบที่สวยงาม ทันสมัย <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesDesign')}"
              :message="errors.first('quesDesign')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesDesign"
                  :native-value="answer.value"
                  name="quesDesign"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>แอปพลิเคชันตอบสนองต่อความต้องการของผู้ใช้งาน <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesApplication')}"
              :message="errors.first('quesApplication')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesApplication"
                  :native-value="answer.value"
                  name="quesApplication"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>แอปพลิเคชันมีการประมวลผลที่รวดเร็ว <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesProcess')}"
              :message="errors.first('quesProcess')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesProcess"
                  :native-value="answer.value"
                  name="quesProcess"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>ช่วยลดระยะเวลาในการหาข้อมูลรายวิชา <span class="color-red">*</span></h2>
          <div class="radioButton">
            <b-field
              :addons="false"
              :type="{'is-danger': errors.has('quesHelp')}"
              :message="errors.first('quesHelp')">
                <b-radio
                  v-for="(answer, index) in answers"
                  :key="index"
                  v-model="quesHelp"
                  :native-value="answer.value"
                  name="quesHelp"
                  v-validate="'required'"
                  type="is-info">
                    {{ answer.text }}
                </b-radio>
            </b-field>
          </div>
        </div>

        <div class="block-quesion">
          <h2>ข้อเสนอแนะเพิ่มเติม</h2>
          <b-field>
            <b-input placeholder="คำตอบของคุณ" v-model="quesMore" maxlength="200" type="textarea"></b-input>
          </b-field>
        </div>
      </div>

      <div class="buttonQuesion text-center">
        <button @click="submit">ส่งคำตอบ</button>
      </div>

    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      isLoading: false,
      quesTrue: null,
      quesComplete: null,
      quesEasy: null,
      categorieType: null,
      quesConv: null,
      quesDesign: null,
      quesApplication: null,
      quesProcess: null,
      quesHelp: null,
      quesMore: '',
      answers: [
        {
          text: 'มากที่สุด',
          value: 5
        },
        {
          text: 'มาก',
          value: 4
        },
        {
          text: 'ปานกลาง',
          value: 3
        },
        {
          text: 'น้อย',
          value: 2
        },
        {
          text: 'น้อยที่สุด',
          value: 1
        }
      ]
    }
  },
  methods: {
    async submit () {
      let validateBool = await this.$validator.validateAll()
      if (validateBool) {
        let data = {
          quesTrue: this.quesTrue,
          quesComplete: this.quesComplete,
          quesEasy: this.quesEasy,
          categorieType: this.categorieType,
          quesConv: this.quesConv,
          quesDesign: this.quesDesign,
          quesApplication: this.quesApplication,
          quesProcess: this.quesProcess,
          quesHelp: this.quesHelp,
          quesMore: this.quesMore
        }
        this.isLoading = true
        let axiosData = await Axios({
          method: 'POST',
          url: 'http://localhost:5000/backend-qvy/us-central1/backendAPI/quesionair',
          data: data
        })
        console.log(axiosData)
        this.isLoading = false
        this.$buefy.dialog.alert({
          message: 'ขอบคุณที่ตอบแบบสอบถาม',
          onConfirm: () => this.link()
        })
      } else {
        this.$buefy.toast.open({
          duration: 4000,
          message: 'ตอบแบบสอบถามไม่ครบ',
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    },
    link () {
      this.$router.push({name: 'index'})
    }
  },
  mounted () {
    const dict = {
      custom: {
        quesTrue: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesComplete: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesEasy: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        categorieType: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesConv: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesDesign: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesApplication: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesProcess: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        },
        quesHelp: {
          required: 'จำเป็นต้องตอบคำถามนี้ *'
        }
      }
    }
    this.$validator.localize('th', dict)
  }
}
</script>
