const CONTRACT = {
  outline: [
    'The full names of all tenants who will be residing in the rental property.',
    'The address and description of the rental property, including the number of bedrooms, bathrooms, and any other relevant details.',
    'The start and end dates of the lease agreement.',
    'The amount of rent and how often it is due (e.g., monthly).',
    'The security deposit amount, including any terms for its return.',
    'The responsibilities of the landlord and the tenants, such as maintenance and repairs.',
    'Any restrictions on the use of the rental property, such as smoking or pets.',
    'Rules regarding late rent payments, eviction, and termination of the lease agreement.',
    'Any additional clauses or special terms agreed upon between the landlord and the tenants.',
  ],
  content: [
    { title: '' },
    { title: '' },
    {
      title: 'Term of Lease',
      content: [
        {
          subHeading:
            'The lease shall commence on the agreed dates in writing by both parties, the lease term shall be for {leaseMonths} months.',
          data: [
            'At the end of the lease term, the tenant must vacate the rental property unless they have signed a new lease agreement with the landlord. If the tenant remains in the rental property beyond the end of the lease term without signing a new lease agreement, the landlord may initiate eviction proceedings.',
            'If the tenant wishes to renew the lease, they must provide written notice to the landlord at least {renewLeaseDays} days prior to the end of the lease term. The landlord may choose to renew the lease on the same terms and conditions, or may negotiate new terms and conditions with the tenant.',
          ],
        },
      ],
    },
    { title: '' },
    { title: '' },
    {
      title: 'Responsibilities of the Landlord and Tenant',
      content: [
        {
          subHeading:
            'Both parties agree to fulfill the following responsibilities:',
          data: [
            {
              title: "Landlord's Responsibilities",
              content: [
                { heading: 'The landlord agrees to:' },
                'Keep the property in good condition and repair',
                'Ensure that the rental property is safe and habitable',
                'Provide and maintain essential services such as water, electricity, and gas (if applicable)',
                'Comply with all relevant laws and regulations regarding the rental property',
                'Address any concerns or requests raised by the tenant in a timely manner',
              ],
            },
            {
              title: "Tenant's Responsibilities",
              content: [
                { heading: 'The tenant agrees to:' },
                'Keep the rental property clean and tidy',
                'Use the property in a reasonable manner that does not cause damage or disturbance to the property or other tenants',
                'Inform the landlord of any damages or issues with the property as soon as possible',
                'Comply with all relevant laws and regulations regarding the rental property',
                'Return the property to the landlord in the same condition as when received, except for normal wear and tear',
              ],
            },
            {
              title: 'Maintenance and Repairs',
              content:
                'The landlord agrees to maintain the property in a safe and habitable condition, including repairing any damages that are not caused by the tenant. The tenant agrees to promptly inform the landlord of any damages or issues with the property and to allow the landlord or their representative to enter the property to make necessary repairs.',
            },
            {
              title: 'Alterations to the Property',
              content:
                'The tenant may not make any alterations or modifications to the rental property without the landlord’s prior written consent. Any alterations or modifications made without the landlord’s consent may result in additional fees or charges or may be considered a breach of the lease agreement.',
            },
          ],
        },
      ],
    },
    {
      title: 'Restrictions on Use',
      content: [
        {
          subHeading:
            'The following restrictions apply to the use of the rental property:',
          data: [
            {
              title: 'Smoking',
              content:
                'Smoking is not allowed anywhere on the rental property, including within the rental unit and on the outdoor premises.',
            },
            {
              title: 'Pets',
              content:
                'Pets are not allowed on the rental property without the landlord’s prior written permission. If the landlord allows pets, the tenant may be required to pay an additional deposit or monthly fee, and must follow all applicable rules and regulations regarding pet ownership, including cleaning up after the pet and preventing damage to the property',
            },
            {
              title: 'Illegal Activities',
              content:
                'The tenant may not engage in any illegal activities on the rental property, including but not limited to drug use or distribution, theft, or vandalism. Any violation of this restriction may result in immediate termination of the lease agreement and eviction.',
            },
            {
              title: 'Quiet Enjoyment',
              content:
                "The tenant has the right to quiet enjoyment of the rental property, which means that the landlord may not interfere with the tenant's use and enjoyment of the property. Similarly, the tenant may not interfere with the quiet enjoyment of other tenants in the building or neighboring properties.",
            },
            {
              title: 'Use of Common Areas',
              content:
                'The tenant may use any common areas or facilities provided by the landlord, such as laundry rooms, swimming pools, or outdoor spaces, in accordance with any applicable rules or regulations. The tenant is responsible for any damages caused by their use of these areas or facilities.',
            },
          ],
        },
      ],
    },
    {
      title: 'Rent Payments, Late Fees, and Eviction',
      content: [
        {
          data: [
            {
              title: 'Rent Payments',
              content:
                'The landlord shall send a billing statement to the tenant on the 1st of each month representing the rent due for that month. Rent payments shall be made by {paymentMethods}, and shall be due by the {dueDate} day of each month. Rent payments shall be sent to the following address: {address}.',
            },
            {
              title: 'Late Fees',
              content:
                'If rent is not received by the due date, a late fee of {lateFee} will be charged. Late fees will be added to the amount due for the next rental period.',
            },
            {
              title: 'Eviction',
              content:
                'If rent is not received within {evictionDays} days of the due date, the landlord may initiate eviction proceedings. The landlord may also initiate eviction proceedings if the tenant breaches any terms of the lease agreement, including but not limited to damaging the rental property, engaging in illegal activities, or violating the restrictions on use.',
            },
            {
              title: 'Right to Terminate',
              content:
                "The landlord reserves the right to terminate the lease agreement at any time if the tenant fails to pay rent or breaches any terms of the lease agreement. The landlord may also terminate the lease agreement if the tenant's conduct poses a danger to themselves, other tenants, or the property. The landlord shall provide the tenant with written notice of termination and the reason for termination.",
            },
            {
              title: 'Security Deposit',
              content:
                'The tenant has paid a security deposit of {depositAmount}, which will be held by the landlord for the duration of the lease agreement. The security deposit will be used to cover any damages caused by the tenant or any outstanding rent owed by the tenant. If the tenant leaves the rental property in good condition and owes no outstanding rent, the security deposit will be returned to the tenant within {depositReturnDays} days of the end of the lease agreement.',
            },
          ],
        },
      ],
    },
    { title: '' },
    { title: '' },
  ],
}
