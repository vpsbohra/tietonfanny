<template>
    <div class="Chart">
        <div class="container">
           <zingchart :data="chartData" />
        </div> 
    </div>
</template>
<script>
import 'zingchart/es6';

export default {
  data() {
    return {
      chartData: {
           type: 'ring',
      plot: {
        tooltip: {
          visible: false
        },
        valueBox: {
          text: '%t',
          color: '#FFF',
          fontSize: '14px',
          fontWeight: 'none'
        },
        cursor: 'hand',
        detach: false,
        shadow: true
      },
      series: [{
          text: '25%',
          values: [25],
          backgroundColor: '#3cb879',
          'data-id': 'vt'
        },
        {
          text: '58%',
          values: [58],
          backgroundColor: '#5675b8',
          'data-id': 'sp'
        },
        {
          text: '47%',
          values: [47],
          backgroundColor: '#f46d7c',
          'data-id': 'dt'
        },
        {
          text: '79%',
          values: [79],
          backgroundColor: '#015b7e',
          'data-id': 'st'
        },
        {
          text: '87%',
          values: [87],
          backgroundColor: '#f46d7c',
          'data-id': 'dm'
        }
      ]
      }
    }
  }
}
</script>
