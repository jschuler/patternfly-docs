import { WizardPage, Step as RfwStep, Section as RfwSection, TextInput as RfwTextInput, Select as RfwSelect } from '@patternfly-labs/react-form-wizard'

function Example() {
   return (
      <WizardPage title="My Wizard">
         <RfwStep label="Details" id="details-step">
            <RfwSection label="Details">
               <RfwTextInput label="Name" path="name" required />
               <RfwSelect label="Namespace" path="namespace" options={['default', 'namespace-1']} />
            </RfwSection>
         </RfwStep>
      </WizardPage>
   )
}

export default Example