<template>
  <div class="login">
    <h3>Giriş yap</h3>
    <input type="email"
      placeholder="Email"
      v-model="email"
      class="form-control"
      @blur="$v.email.$touch()"
      :class="{'is-invalid': $v.email.$error}"
    />
    <small v-if="$v.email.$error">
      <span v-if="!$v.email.required">Lütfen bir email adresi yazın</span>
      <span v-if="!$v.email.email">Lütfen geçerli bir email adresi yazın</span>
    </small>

    <input type="password"
      placeholder="Şifre"
      v-model="password"
      class="form-control"
      @blur="$v.password.$touch()"
      :class="{'is-invalid': $v.password.$error}"
    />
    <small v-if="$v.password.$error">
      <span v-if="!$v.password.required">Lütfen bir Şifre yazın</span>
      <span v-if="!$v.password.valid">Şifreniz en az bir küçük harf, bir büyük harf ve bir rakam içermelidir</span>
    </small>

    <button @click="submitData">Giriş yap</button>
  </div>
</template>

<script>
import Api from "../services/api";
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  name: "UserLogin",
 setup() {
  return v$; {useVuelidate() }
 },
  
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitData: async function() {
      try {
        const $v = useVuelidate();
        const data = { Username: this.email, Password: this.password };
        const api = new Api();
        const response = await api.login(data);
        console.log(response.data);
        if (response.data.IsSucceed) {
          this.$toast.success("Giriş başarılı.");
          this.$router.push("/user-dashboard");
        } else {
          this.$toast.error("Giriş başarısız.");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  validations: {
    email: { required, email },
    password: {
      required,
      valid: value => {
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumbercase = /[0-9]/.test(value);
        return containsUppercase && containsLowercase && containsNumbercase;
      }
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px 0;
  width: 25%;
  padding: 10px;
}

button {
  margin-top: 10px;
  width: 15%;
  cursor: pointer;
  padding: 10px;
}


p {
  margin-top: 40px;
  font-size: 14px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
