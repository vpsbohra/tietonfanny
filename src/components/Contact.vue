<template>
<div class="contact-form">
    <div class="container">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <div class="contact-inner">
                        <h2>Contact</h2>
                        <p>Need to get in touch with thebteam/ We’re all ears</p>
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address">
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone Number">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Write us a message"></textarea>
                            </div>
                            <div class="form-group submit-button">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
  name: 'Contact',
  props: {
    msg: String,
  }
}
</script>