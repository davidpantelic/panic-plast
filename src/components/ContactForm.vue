<template>
  <div class="ada-form border-2 border-brand-black rounded-lg p-5">
    <h2 class="mb-5">{{ t('form.title') }}</h2>
    <form @submit.prevent="submitForm" novalidate>

      <div class="form-group">
        <label>{{ t('form.name') }}: *<span class="sr-only">{{ t('form.required_word') }}</span> <span v-if="showErrors && !contactForm.name">{{ t('form.required') }}</span>
          <input type="text" v-model="contactForm.name" required />
        </label>
      </div>

      <div class="form-group">
        <label>Email: *<span class="sr-only">{{ t('form.required_word') }}</span> <span v-if="showErrors && !isValidEmail">{{ t('form.required_email') }}</span>
          <input type="email" v-model="contactForm.email" required />
        </label>
      </div>

      <div class="form-group">
        <label>{{ t('form.message') }}: <span class="sr-only">{{ t('form.optional_word') }}</span>
          <textarea v-model="contactForm.message"></textarea>
        </label>
      </div>

      <button class="btn-2 w-full !rounded-md" type="submit">{{ t('form.submit') }}</button>

      <!-- Display a success message if the form is submitted successfully -->
      <p v-if="successMessage">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Initialize form state with default properties
const contactForm = ref({
  name: '',
  email: '',
  message: '', // Message is now optional
});

// State to trigger error display after form submission
const showErrors = ref(false);

// Success message state
const successMessage = ref('');

// Computed property to validate email format
const isValidEmail = computed(() => {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(contactForm.value.email);
});

// Define optional fields (e.g., message)
const optionalFields = ['message'];

// Dynamic form validation function
const isFormValid = () => {
  // Loop through each field in contactForm and check if it's empty
  for (const key in contactForm.value) {
    // Skip optional fields from validation
    if (optionalFields.includes(key)) {
      continue;
    }

    // If a required field is empty, the form is invalid
    if (!contactForm.value[key]) {
      return false;
    }
  }

  // Additional custom validation for email field
  if (!isValidEmail.value) {
    return false;
  }

  return true; // If all fields are valid
};

// Form submission handler
const submitForm = () => {
  // Show errors if fields are empty or invalid
  showErrors.value = true;

  // Check if the form is valid dynamically
  if (!isFormValid()) {
    // focus first field from top that is invalid
    const firstInvalidInput = document.querySelector('form [required]:invalid');
    if (firstInvalidInput) {
      firstInvalidInput.focus();
    }
    return; // Stop submission if the form is invalid
  }

  // If all fields are valid, proceed with submission
  console.log('Form submitted:', contactForm.value);

  // Reset the form
  contactForm.value = {
    name: '',
    email: '',
    message: '',
  };

  // Hide error messages after successful submission
  showErrors.value = false;

  // Show success message
  successMessage.value = t('form.success');
};
</script>
