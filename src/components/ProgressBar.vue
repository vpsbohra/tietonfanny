<template>
<div class="my-3">
<div class="ProgressBar">
    <h4>Lorem Ipsum is simply dummy text of the printing</h4>
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span style="color:black;">4 Votes</span></div>
    </div>
    <h4>Lorem Ipsum is simply dummy text of the printing</h4>
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span style="color:black;">6 Votes</span></div>
    </div>
    <h4>Lorem Ipsum is simply dummy text of the printing</h4>
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span style="color:black;">8 Votes</span></div>
    </div>
    <h4>Lorem Ipsum is simply dummy text of the printing</h4>
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span style="color:black;">9 Votes</span></div>
    </div>  
</div>
</div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    msg: String,
  }
}
</script>