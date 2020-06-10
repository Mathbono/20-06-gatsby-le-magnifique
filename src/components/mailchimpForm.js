import React from 'react';

const MailchimpForm = () => (
	<form
		name="mailchimp"
		method="POST"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
	>
		<p>
			<label>
				Votre email : <input type="email" name="email" />
			</label>
		</p>
		<input type="hidden" name="form-name" value="mailchimp" />
		<input type="hidden" name="bot-field" />
		<p>
			<button type="submit">Envoyer</button>
		</p>
	</form>
);

export default MailchimpForm;
