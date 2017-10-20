<template>
  <footer>
    <div class="footer-top py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <dl>
              <dt class="mb-2">
                Contacts
              </dt>
              <dd class="mb-4">
                <div><a href="mailto:info@devsummit.io">info@devsummit.io</a></div>
              </dd>
              <dd class="mb-4">
                <div><strong>Fajar Adityo</strong></div>
                <div><a href="tel:+6281252700655">+62 812 5270 0655</a></div>
              </dd>
              <dd class="mb-4">
                <div><strong>Hadyan Palupi</strong></div>
                <div><a href="tel:+628989294919">+62 8989 294 919</a></div>
              </dd>
            </dl>
          </div>
          <div class="col-lg-4">
            <dl class="connect-with-us">
              <dt class="mb-2">
                Connect with us
              </dt>
              <dd><a href="mailto:fajar@gmail.com">General Enquiries</a></dd>
              <dd><a href="mailto:fajar@gmail.com">Speaker Submission</a></dd>
              <dd><a href="mailto:fajar@gmail.com">Media Enquiries</a></dd>
            </dl>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-4">
            <dl>
              <dt class="mb-2">
                Get the tickets!
              </dt>
              <dd class="mb-4">
                We want give you the best and memorable experience through our app.
              </dd>
              <dd>
                <a href="https://play.google.com/store/apps/details?id=io.devsummit.app.android">
                  <img src="/home/static/Playstore.png" alt="" class="img-fluid" style="width: 160px;">
                </a>
                <a href="https://itunes.apple.com/id/app/indonesia-developer-summit/id1287587345">
                  <img src="/home/static/Appstore.png" alt="" class="img-fluid" style="width: 160px;">
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom py-2">
      <div class="container text-muted text-center">
        <small>Copyright&copy; 2017 DevSummit</small>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  $purple: #232741;

  a {
    color: whitesmoke;
    text-decoration: none;
  }

  footer {
    color: #f0f0f0;
    background: $purple;
  }

  dt {
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: lighter;
    color: #f1c40f;
  }

  .footer-bottom {
    background: darken($purple, 10%);
    font-size: 13px;
  }
</style>
