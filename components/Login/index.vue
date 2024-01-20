<template>
    <div class="login-wrapper">
        <div class="login-background">
            <div class="login-container">
                <h2 class="login-title">Sign in</h2>
                <form action="">
                    <div class="input-container">
                        <input type="email" placeholder="Email">
                    </div>
                    <div class="input-container">
                        <input type="password" placeholder="Mật khẩu">
                    </div>
                    <div class="submit-container">
                        <button class="submit-button">Sign in</button>
                    </div>
                </form>
                <div class="help-container">
                    <span class="help-text">
                        You need a help?
                    </span>
                </div>
                <div class="newuser-container">
                    <span>Bạn mới tham gia Netflix? <span class="register-now">
                            Đăng ký ngay.
                        </span> </span>
                </div>
                <p class="recatcha-text">
                    Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.
                    <span class="deep-more-text">Tìm hiểu thêm.</span>
                </p>
            </div>
        </div>
        <div class="footer-wrapper">
            <div class="footer-content-container">
                <h4 class="footer-title">
                    Bạn có câu hỏi? Liên hệ với chúng tôi.
                </h4>
                <div class="footer-tags-container">
                    <span class="footer-tag">
                        <nuxt-link to="">Câu hỏi thường gặp</nuxt-link>
                    </span>
                    <span class="footer-tag">
                        <nuxt-link to="">Trung tâm trợ giúp</nuxt-link>
                    </span>
                    <span class="footer-tag">
                        <nuxt-link to="">Điều khoản sử dụng</nuxt-link>
                    </span>
                    <span class="footer-tag">
                        <nuxt-link to="">Quyền riêng tư</nuxt-link>
                    </span>
                    <span class="footer-tag">
                        <nuxt-link to="">Tùy chọn cookie</nuxt-link>
                    </span>
                    <span class="footer-tag">
                        <nuxt-link to="">Thông tin doanh nghiệp</nuxt-link>
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
@import url('../../assets/style/loginCss/login.css');
</style>