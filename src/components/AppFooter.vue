<script>
export default{
    data(){
        return{
            companyName: "Boolando s.r.l",
            description: [ "Informazioni legali", "Informativa sulla privacy"," Diritto di recesso" ],
            findUs: "Trovaci anche su",
            social: ["Twitter", "Facebook", "Insta", "Pinterest", "YouTube"] 
        }
    }
}
</script>

<template>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="info-container">
                <p class="company-name">{{ companyName }}</p>
                <ul class="description">
                    <li v-for="info in description"><a href="#">{{ info }}</a></li>
                </ul>
            </div>
            <div class="social-container">
                <p class="find-us">{{ findUs }}</p>
                <ul class="social">
                    <li>
                        <!-- <font-awesome-icon icon="fa-solid fa-square-twitter" /> -->

                    </li>
                </ul>
            </div>

        </div>

    </div>
</footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;

.footer{
    width: 100%;
    margin-top: 50px;
    min-height: 100px;
    background-color: $footer-color;
    color: white;

    .row{
        display: flex;
        justify-content: space-between;
    }
    .info-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 25px;
    }
    .company-name{
        font-size: 15px;
        font-weight: bold;
    }

    .description{
        font-size: 13px;
        display: flex;
        gap: 10px;
    }

    .social-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 25px;
    }

    .social{
        display: flex;
        gap: 10px;
    }
}
</style>