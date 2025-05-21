const questions = [
  {
    "id": 1,
    "type": "msq",
    "question": "Which documents does SAP Transportation Management support when planning transportation with SAP S/4HANA?",
    "options": [
      "Material documents",
      "Stock transport orders",
      "Transfer orders",
      "Inbound deliveries",
      "Returns"
    ],
    "answer": [1, 3, 4]
  },
  {
    "id": 2,
    "type": "single-choice",
    "question": "What is the result of posting a vendor's invoice?",
    "options": [
      "The material ledger document is generated",
      "The vendor's account is cleared of open items.",
      "The purchase order history is updated.",
      "Vendor payment is posted"
    ],
    "answer": 2
  },
  {
    "id": 3,
    "type": "single-choice",
    "question": "For which object do you plan activity prices?",
    "options": [
      "Cost center",
      "Work center",
      "WBS element",
      "Internal order"
    ],
    "answer": 0
  },
  {
    "id": 4,
    "type": "single-choice",
    "question": "You've been tasked with converting SAP Fiori Tile groups to SAP Fiori Spaces. Which of the following assignments should be made?",
    "options": [
      "Assign Tiles to Pages",
      "Assign Spaces to Pages",
      "Assign Pages to Spaces",
      "Assign Sections to Spaces"
    ],
    "answer": 2
  },
  {
    "id": 5,
    "type": "single-choice",
    "question": "What is created when you post a valuated goods receipt for consumable materials?",
    "options": [
      "Material ledger document",
      "Vendor invoice document",
      "Controlling document",
      "Commitment"
    ],
    "answer": 2
  },
  {
    "id": 6,
    "type": "single-choice",
    "question": "Which of the following is the basic organizational unit in Management Accounting?",
    "options": [
      "Cost Center",
      "Client",
      "Company Code",
      "Controlling Area"
    ],
    "answer": 3
  },
  {
    "id": 7,
    "type": "msq",
    "question": "You post an invoice to purchase a company car. What accounts are posted in the journal entry?",
    "options": [
      "Supplier account",
      "Asset account",
      "Material account",
      "Tax account",
      "Customer account"
    ],
    "answer": [0, 1, 3]
  },
  {
    "id": 8,
    "type": "single-choice",
    "question": "Which of the following is a permitted hierarchical structure for Management Accounting in the SAP S/4HANA enterprise structure?",
    "options": [
      "A controlling area is assigned to a plant.",
      "A controlling area is assigned to an operating concern.",
      "An operating concern is assigned to a company code.",
      "An operating concern is assigned to a controlling area."
    ],
    "answer": 3
  },
  {
    "id": 9,
    "type": "msq",
    "question": "Why might you create an equipment master record?",
    "options": [
      "To report the usage time of an object at a functional location",
      "To perform and record maintenance tasks for certain parts of your technical system for long-term evaluation",
      "To functionally represent the technical system structures at your company",
      "To collect and evaluate technical data for an object over a long period of time"
    ],
    "answer": [1, 3]
  },
  {
    "id": 10,
    "type": "single-choice",
    "question": "What is the result of document splitting?",
    "options": [
      "Additional logistical documents are created",
      "Additional controlling documents are created",
      "Additional values are created",
      "Additional financial documents are created"
    ],
    "answer": 3
  },
  {
    "id": 11,
    "type": "msq",
    "question": "What are some of the functions of SAP Extended Warehouse Management?",
    "options": [
      "Putaway with transfer orders",
      "Mobile device integration",
      "Storage-bin-level determination for incoming goods",
      "Inventory management at storage location level"
    ],
    "answer": [1, 2]
  },
  {
    "id": 12,
    "type": "single-choice",
    "question": "Which object is created to report on market characteristics, such as customer, product, and region?",
    "options": [
      "Sales organization",
      "Profit center",
      "Profitability segment",
      "Segment"
    ],
    "answer": 2
  },
  {
    "id": 13,
    "type": "single-choice",
    "question": "What must you do in a purchase order to purchase a material for a cost center?",
    "options": [
      "Enter a purchase order item category",
      "Enter a storage location.",
      "Enter an activity type for the cost center in the purchasing document.",
      "Enter an account assignment category"
    ],
    "answer": 3
  },
  {
    "id": 14,
    "type": "single-choice",
    "question": "You have found a new source of supply for a material. When maintaining the Business Partner information for the Supplier role, which organizational unit should be extended?",
    "options": [
      "Purchasing Organization",
      "Company Code",
      "Plant",
      "Purchasing Group"
    ],
    "answer": 0
  },
  {
    "id": 15,
    "type": "single-choice",
    "question": "What type of document is generated for an external network activity?",
    "options": [
      "Production order",
      "Sales order",
      "Reservation",
      "Purchase requisition"
    ],
    "answer": 3
  },
  {
    "id": 16,
    "type": "msq",
    "question": "What general ledger accounts receive postings when performing the goods receipt?",
    "options": [
      "Vendor reconciliation account",
      "Tax Account",
      "Consumption account",
      "GR/IR account"
    ],
    "answer": [0, 3]
  },
  {
    "id": 17,
    "type": "single-choice",
    "question": "In a project, what is the correct term for a group of dependencies, activities, and relationships sequenced in chronological order?",
    "options": [
      "Work breakdown structure",
      "Project planning",
      "Routing",
      "Network"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "type": "msq",
    "question": "Which of the following applies to Sales and Distribution enterprise structures?",
    "options": [
      "A division can only be assigned to one sales organization.",
      "A sales organization can only be assigned to one company code",
      "A sales organization can be assigned to more than one company code.",
      "A distribution channel can be assigned to many sales organizations.",
      "A division can be assigned to more than one sales organization."
    ],
    "answer": [2, 3, 4]
  },
  {
    "id": 19,
    "type": "single-choice",
    "question": "What action assigns actual costs to a project?",
    "options": [
      "Material availability check",
      "Saving a purchase order",
      "Material withdrawal from slock",
      "Releasing a project budget"
    ],
    "answer": 2
  },
  {
    "id": 20,
    "type": "single-choice",
    "question": "You purchase raw materials with a purchase order against a cost center. During which process step are financial accounting documents posted?",
    "options": [
      "Save purchase order",
      "Approval of purchase requisition",
      "Inbound delivery to warehouse",
      "Post valuated goods receipt"
    ],
    "answer": 3
  },
  {
    "id": 21,
    "type": "single-choice",
    "question": "Which SAP Suite line-of-business solution can be used to enhance the procurement of external services?",
    "options": [
      "SAP Arba",
      "SAP Concur Travel and Expense",
      "SAP Success Factors",
      "SAP Field glass"
    ],
    "answer": 3
  },
  {
    "id": 22,
    "type": "msq",
    "question": "What does a work center control?",
    "options": [
      "Availability of capacity",
      "Calculation of costs of work performed",
      "Release of production orders",
      "Valuation of bill of material components"
    ],
    "answer": [0, 1]
  },
  {
    "id": 23,
    "type": "msq",
    "question": "What are the benefits of using a business partner in SAP S/4HANA?",
    "options": [
      "Vendors are managed separately from customers.",
      "Redundant data is reduced.",
      "Data architecture is harmonized",
      "General data is unique to each assigned role."
    ],
    "answer": [1, 2]
  },
  {
    "id": 24,
    "type": "single-choice",
    "question": "You have created an equipment master record. What other master data record can be created automatically?",
    "options": [
      "Functional location",
      "Material",
      "Asset",
      "Maintenance BOM"
    ],
    "answer": 2
  },
  {
    "id": 25,
    "type": "single-choice",
    "question": "Which action updates the costing-based profitability analysis?",
    "options": [
      "Post goods issue",
      "Save the billing document",
      "Post the customer's payment",
      "Create the outbound delivery"
    ],
    "answer": 1
  },
  {
    "id": 26,
    "type": "msq",
    "question": "Which of the following are advantages of the SAP Business Technology Platform?",
    "options": [
      "Unified application development environment",
      "Optimized for any software",
      "Uses the latest machine learning innovations",
      "Uses SAP Fiori Spaces",
      "Flexible workflows"
    ],
    "answer": [0, 2, 4]
  },
  {
    "id": 27,
    "type": "msq",
    "question": "Which of the following can be maintained in a maintenance notification?",
    "options": [
      "Materials planning",
      "Capacity requirements",
      "Tasks",
      "Cause of damage",
      "Equipment"
    ],
    "answer": [2, 3, 4]
  },
  {
    "id": 28,
    "type": "msq",
    "question": "What is the purpose of using a Work Breakdown Structure (WBS)?",
    "options": [
      "To evaluate aggregated data",
      "To schedule warehouse tasks",
      "To manage equipment",
      "To allocate budgets",
      "To define responsibilities"
    ],
    "answer": [0, 3, 4]
  },
  {
    "id": 29,
    "type": "msq",
    "question": "What elements are recorded during an overall completion confirmation of a maintenance order?",
    "options": [
      "Time entry",
      "Measuring documents",
      "Availability check",
      "Materials",
      "Invoicing"
    ],
    "answer": [0, 1, 3]
  },
  {
    "id": 30,
    "type": "msq",
    "question": "What tasks are performed for external reporting purposes?",
    "options": [
      "Manage accounts receivables",
      "Calculate production variances",
      "Create a profit and loss statement",
      "Create cost center plan/actual statements"
    ],
    "answer": [2, 3]
  },
  {
    "id": 31,
    "type": "single-choice",
    "question": "What is the timeframe of SAP Success Factors release cycles?",
    "options": [
      "Bi-annually",
      "Monthly",
      "Annually",
      "Quarterly"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "type": "single-choice",
    "question": "To what object can you settle an internal order?",
    "options": [
      "Statistical key figure",
      "Equipment",
      "Profit center",
      "Fixed asset"
    ],
    "answer": 2
  },
  {
    "id": 33,
    "type": "single-choice",
    "question": "When running MRP, what setting in the material master determines if a material will be procured or produced?",
    "options": [
      "Procurement type",
      "Purchasing group",
      "MRP type",
      "Processing key"
    ],
    "answer": 0
  },
  {
    "id": 34,
    "type": "msq",
    "question": "What transactions credit a production order?",
    "options": [
      "Goods receipt",
      "Material withdrawal",
      "Confirmation",
      "Order settlement"
    ],
    "answer": [0, 3]
  },
  {
    "id": 35,
    "type": "msq",
    "question": "Which organizational units do you create for Financial Accounting (FI) in SAP S/4HANA Finance?",
    "options": [
      "Operating concern",
      "Controlling area",
      "Segment",
      "Company code"
    ],
    "answer": [1, 3]
  },
  {
    "id": 36,
    "type": "msq",
    "question": "During the production order process, what steps can be executed via background processing?",
    "options": [
      "Order release",
      "Order settlement",
      "WIP determination",
      "Order confirmation",
      "Order creation"
    ],
    "answer": [0, 1, 2]
  },
  {
    "id": 37,
    "type": "single-choice",
    "question": "Which controlling object is always a statistical object?",
    "options": [
      "Internal order",
      "Profitability segment",
      "Cost center",
      "Profit center"
    ],
    "answer": 1
  },
  {
    "id": 38,
    "type": "msq",
    "question": "When creating condition master records, what data properties does the condition type control?",
    "options": [
      "Scales",
      "Validity period",
      "Currency",
      "Sales organization"
    ],
    "answer": [0, 1]
  },
  {
    "id": 39,
    "type": "single-choice",
    "question": "Which application shows the current levels of stock, requirements, and receipts for a given material?",
    "options": [
      "MRP Live",
      "MRP List",
      "Stock overview",
      "Stock requirements list"
    ],
    "answer": 3
  },
  {
    "id": 40,
    "type": "msq",
    "question": "Which master records are directly assigned to a company code?",
    "options": [
      "Material",
      "Cost center",
      "Activity type",
      "Fixed asset"
    ],
    "answer": [1, 3]
  },
  {
    "id": 41,
    "type": "msq",
    "question": "When creating a warehouse number in the SAP enterprise structure, what organizational elements must be assigned?",
    "options": [
      "Shipping point",
      "Company code",
      "Plant",
      "Storage location"
    ],
    "answer": [2, 3]
  },
  {
    "id": 42,
    "type": "single-choice",
    "question": "In a warehouse, what represents the physical location where the goods are stored?",
    "options": [
      "Pallet",
      "Storage location",
      "Storage section",
      "Storage bin"
    ],
    "answer": 3
  },
  {
    "id": 43,
    "type": "msq",
    "question": "What objects are used to create a Purchasing Info Record?",
    "options": [
      "Company code",
      "Purchasing organization",
      "Material master",
      "Vendor",
      "Purchasing group"
    ],
    "answer": [1, 2, 3]
  },
  {
    "id": 44,
    "type": "msq",
    "question": "What are the suite qualities of the SAP Intelligent Enterprise?",
    "options": [
      "One workflow inbox",
      "End-to-end process blueprints",
      "Embedded analytics per product",
      "Seamless user experience",
      "Code-based applications"
    ],
    "answer": [1, 2, 3]
  },
  {
    "id": 45,
    "type": "msq",
    "question": "Which business process activities create a Financial Accounting (FI) document?",
    "options": [
      "Transfer stock from storage location to storage location",
      "Post goods issue to a production order",
      "Execute a depreciation run",
      "Create a sales order",
      "Transfer stock to another company code"
    ],
    "answer": [1, 2, 4]
  },
  {
    "id": 46,
    "type": "single-choice",
    "question": "What demand elements are evaluated during a MRP run?",
    "options": [
      "Sales orders",
      "Planned orders",
      "Scheduled lines",
      "Purchase requisitions"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "type": "msq",
    "question": "What happens when you post a goods issue in a delivery document for a sales order?",
    "options": [
      "An EWM outbound delivery order is created.",
      "The billing due list is updated",
      "An invoice is created",
      "A material ledger document is created.",
      "Inventory quantities are updated."
    ],
    "answer": [0, 1, 4]
  },
  {
    "id": 48,
    "type": "single-choice",
    "question": "What function commits funds assigned to the budget of a WBS element?",
    "options": [
      "Availability control",
      "Cost center accounting",
      "Settlement processing",
      "Profitability analysis"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "type": "msq",
    "question": "Which controlling objects can be settled by a settlement rule in SAP S/4HANA?",
    "options": [
      "Production order",
      "Maintenance order",
      "WBS element",
      "Sales order",
      "Profit center"
    ],
    "answer": [0, 1, 2]
  },
  {
    "id": 50,
    "type": "single-choice",
    "question": "When is backorder processing considered?",
    "options": [
      "When goods issue is performed",
      "When order quantity is not fully confirmed",
      "When planning transportation",
      "When advanced available-to-promise is unavailable"
    ],
    "answer": 1
  },
  {
    "id": 51,
    "type": "single-choice",
    "question": "Which backorder processing (BOP) strategy has first processing priority and is used to release confirmed stock to prioritize other orders to plan future stock needs?",
    "options": [
      "Lose",
      "Gain",
      "Win",
      "Fill"
    ],
    "answer": 3
  },
  {
    "id": 52,
    "type": "msq",
    "question": "Why would you enter your working hours using Cross-Application Time Sheet (CATS)?",
    "options": [
      "To record overtime",
      "To request absence",
      "To confirm activities",
      "To maintain absence",
      "To plan time"
    ],
    "answer": [0, 2, 4]
  },
  {
    "id": 53,
    "type": "msq",
    "question": "Which objects can be assigned to a profit center?",
    "options": [
      "Sales order item",
      "Purchase order item",
      "Sales organization",
      "Material"
    ],
    "answer": [0, 3]
  },
  {
    "id": 54,
    "type": "msq",
    "question": "What is the result of converting a planned order?",
    "options": [
      "A planned independent requirement",
      "A purchase requisition",
      "A purchase order",
      "A production order"
    ],
    "answer": [1, 3]
  },
  {
    "id": 55,
    "type": "single-choice",
    "question": "What is a typical sequence of process steps in corrective maintenance?",
    "options": [
      "1. Create task list\n2. Create notification\n3. Schedule notification\n4. Release order\n5. Confirm order",
      "1. Create notification\n2. Plan order\n3. Execute order\n4. Complete order\n5. Confirm order",
      "1. Create notification\n2. Plan order\n3. Release order\n4. Confirm order\n5. Complete order",
      "1. Create task list\n2. Create notification\n3. Schedule notification\n4. Confirm order\n5. Complete order"
    ],
    "answer": 2
  },
  {
    "id": 56,
    "type": "single-choice",
    "question": "In the enterprise structure, what Human Resources organizational element is assigned directly to a company code?",
    "options": [
      "Personnel area",
      "Position",
      "Infotype",
      "Organizational unit"
    ],
    "answer": 0
  },
  {
    "id": 57,
    "type": "msq",
    "question": "What does a posting key control?",
    "options": [
      "Debit/credit posting",
      "Posting without tax allowed",
      "Number range of document",
      "Account type"
    ],
    "answer": [0, 3]
  },
  {
    "id": 58,
    "type": "msq",
    "question": "Which of the following are business partner categories in SAP S/4HANA?",
    "options": [
      "Individual",
      "Group",
      "Person",
      "Corporation",
      "Organization"
    ],
    "answer": [1, 2, 4]
  },
  {
    "id": 59,
    "type": "msq",
    "question": "Which of the following are selection modes for running MRP?",
    "options": [
      "MRP Live",
      "Predictive MRP",
      "Classical MRP",
      "Regenerative MRP",
      "Backorder Processing"
    ],
    "answer": [0, 2, 3]
  },
  {
    "id": 60,
    "type": "msq",
    "question": "You are creating a new company code that you want to assign to the group controlling area. Which characteristics must the new company code share with the other company codes already assigned to the controlling area?",
    "options": [
      "Fiscal year variant",
      "Operating chart of accounts",
      "Currency",
      "Posting period variant"
    ],
    "answer": [0, 1]
  },
  {
    "id": 61,
    "type": "single-choice",
    "question": "What information do you maintain for a general ledger account on company code level?",
    "options": [
      "Account group",
      "Account type",
      "Account number",
      "Account currency"
    ],
    "answer": 3
  },
  {
    "id": 62,
    "type": "single-choice",
    "question": "What is one advantage of using stock transport orders instead of stock transfers?",
    "options": [
      "The ownership transfer and carrier delivery costs are delayed until goods receipt",
      "Goods movements occur in one step, only a goods issue.",
      "The purchase orders that are generated by MRP can be converted to stock transport orders",
      "The process of goods issue and goods receipt is monitored using the purchase order (PO) history"
    ],
    "answer": 0
  },
  {
    "id": 63,
    "type": "msq",
    "question": "What technology elements supercharge the human experience when working with X and O data?",
    "options": [
      "Machine learning predictions",
      "Internet of Things (IoT)",
      "Block chain",
      "Conversational Al"
    ],
    "answer": [0, 1]
  },
  {
    "id": 64,
    "type": "msq",
    "question": "What occurs when a maintenance technician changes the status of an order to technically completed?",
    "options": [
      "A time entry is posted for the maintenance technician.",
      "Incoming invoices for the order can be processed",
      "Open purchase requisitions are marked for deletion.",
      "Reserved materials are released from the reservation.",
      "The orders settlement rule is executed."
    ],
    "answer": [1, 2, 3]
  },
  {
    "id": 65,
    "type": "single-choice",
    "question": "What master data in the activity type is used to post an activity allocation?",
    "options": [
      "Cost element",
      "Internal order",
      "WBS element",
      "Statistical key figure"
    ],
    "answer": 0
  },
  {
    "id": 66,
    "type": "single-choice",
    "question": "In a make-to-order process, a raw material needs to be issued from the warehouse to the manufacturing line. To which order will you post the goods issue?",
    "options": [
      "Outbound delivery order",
      "Production order",
      "Stock transport order",
      "Sales order"
    ],
    "answer": 1
  },
  {
    "id": 67,
    "type": "single-choice",
    "question": "What data must be linked to a cost center to derive segment accounting?",
    "options": [
      "Profit center",
      "Cost center category",
      "General ledger account",
      "Controlling area"
    ],
    "answer": 0
  },
  {
    "id": 68,
    "type": "msq",
    "question": "Which SAP Fiori application types use SAP HANA capabilities directly?",
    "options": [
      "Analytical",
      "Transactional",
      "SAP GUI for HTML",
      "Factsheet"
    ],
    "answer": [0, 3]
  },
  {
    "id": 69,
    "type": "single-choice",
    "question": "What occurs when planning an internal project activity?",
    "options": [
      "Costs are recorded",
      "Service is performed.",
      "Purchase requisitions are generated.",
      "Resources are committed"
    ],
    "answer": 3
  },
  {
    "id": 70,
    "type": "single-choice",
    "question": "What document, when saved, creates a commitment for an internal order?",
    "options": [
      "Maintenance order",
      "Production order",
      "Goods receipt",
      "Purchase order"
    ],
    "answer": 3
  },
  {
    "id": 71,
    "type": "msq",
    "question": "What maintenance order elements are included in an operation?",
    "options": [
      "Object list",
      "Settlement rule",
      "Work center",
      "Standard time",
      "Activity type"
    ],
    "answer": [0, 2, 3]
  },
  {
    "id": 72,
    "type": "msq",
    "question": "Which end-to-end business processes are included with SAP S/4HANA in the context of the Intelligent Enterprise?",
    "options": [
      "Order to cash",
      "Request to service",
      "Source to pay",
      "Design to build",
      "Record to report"
    ],
    "answer": [0, 2, 4]
  },
  {
    "id": 73,
    "type": "msq",
    "question": "You want the SAP S/4HANA system to perform product cost planning. What master data is used to calculate the quantity structure?",
    "options": [
      "Routing",
      "Work center",
      "Cost center",
      "Bill of material"
    ],
    "answer": [0, 3]
  },
  {
    "id": 74,
    "type": "msq",
    "question": "At which steps in the order-to-cash process are postings made to the general ledger (G/L)?",
    "options": [
      "Creating a sales order",
      "Posting a goods issue",
      "Saving an invoice",
      "Creating an outbound delivery"
    ],
    "answer": [1, 2]
  },
  {
    "id": 75,
    "type": "msq",
    "question": "A goods issue is posted against a production order. What are the results?",
    "options": [
      "A warehouse task is created.",
      "The material reservation is reduced.",
      "Internal labor costs are posted.",
      "A material ledger document is created",
      "Actual costs are updated in the production order."
    ],
    "answer": [1, 3, 4]
  },
  {
    "id": 76,
    "type": "single-choice",
    "question": "How can you post external labour costs to a network activity?",
    "options": [
      "By activity allocation",
      "By service entry sheet",
      "By settlement",
      "By confirmation"
    ],
    "answer": 1
  },
  {
    "id": 77,
    "type": "msq",
    "question": "What types of procedures may be used to perform a cross-plant stock transfer?",
    "options": [
      "Stock transport order without delivery",
      "Slotting and rearrangement",
      "Two-step procedure",
      "One-step procedure",
      "Material requirements planning"
    ],
    "answer": [0, 2, 3]
  },
  {
    "id": 78,
    "type": "msq",
    "question": "What activities can a manager complete using Manager Self-Service?",
    "options": [
      "Control costs",
      "Enroll in benefits",
      "Enter time sheet",
      "Manage budget"
    ],
    "answer": [1, 3]
  },
  {
    "id": 79,
    "type": "single-choice",
    "question": "What planning tool prioritizes sales order forecasting and strategically plans inventory buffers?",
    "options": [
      "MRP simulation and resolution",
      "Demand-driven MRP (DDMRP)",
      "Constraint-based planning (PP/DS)",
      "Backorder processing (BOP)"
    ],
    "answer": 1
  },
  {
    "id": 80,
    "type": "single-choice",
    "question": "When you post an accounting document, for which line item must you enter a transaction type?",
    "options": [
      "Tax account",
      "Material account",
      "Customer account",
      "Asset account"
    ],
    "answer": 3
  }
];
