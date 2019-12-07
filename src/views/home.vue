<template>
  <div>
    <section>
      <b-table
            :data="dataStudent"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template slot-scope="props">
                <b-table-column field="book" label="ชื่อหนังสือ" width="40" centered>
                  {{ props.row.book }}
                </b-table-column>

                <b-table-column field="code" label="รหัสวิชา" centered>
                  {{ props.row.code }}
                </b-table-column>

                <b-table-column field="credit" label="หน่วยกิต" centered>
                  {{ props.row.credit }}
                </b-table-column>

                <b-table-column field="detail" label="รายละเอียด" centered>
                    {{ props.row.detail }}
                </b-table-column>

                <b-table-column field="ps" label="หมายเหตุ" centered>
                    {{ props.row.ps }}
                </b-table-column>

                <b-table-column field="teacher" label="อาจารย์ผู้สอน" centered>
                    {{ props.row.teacher }}
                </b-table-column>

            </template>
        </b-table>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataStudent: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 5,
      data: []
    }
  },
  methods: {
  },
  async created () {
    let getxios = await axios.get('https://us-central1-backend-qvy.cloudfunctions.net/backendAPI/getSubject')
    this.dataStudent = getxios.data.data
    console.log(this.dataStudent)
  }
}
</script>
