<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form>
          <div class="form-group">
            <label for="login">Login</label>
            <input
              type="email"
              class="form-control"
              id="login"
              aria-describedby="emailHelp"
              placeholder="Enter email" v-model="login">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
const url = 'http://localhost/SecurityManager/Account/Login';
export default {
  data(){
    return {
      login: 'JBell35756@mosaic',
      password: 'passW0rd!'
    }
  },
  methods:{
    submitForm(){
      axios.post(url, {
        UserName: this.login,
        Password: this.password,
        RememberMe: false
      });
      alert('ok');
    }
  }
}
</script>