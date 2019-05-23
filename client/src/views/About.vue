<template>
	<div class="about">
		<h1>This is an about page Add auto push scripts</h1>
		<h2 v-t="'hello'"></h2>
		<button @click="changeLocale">Change Language</button>
	</div>
</template>

<script>
import { loadLanguageAsync } from '@/modules/i18n-setup';

export default {
	data() {
		return {
			locale: ''
		};
	},
	methods: {
		changeLocale() {
			loadLanguageAsync(this.$i18n.locale === 'en' ? 'vi' : 'en');
			this.locale = this.$i18n.locale;
		}
	}
};
</script>
