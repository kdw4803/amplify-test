// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBilling = `query GetBilling($UserID: Int!, $BillingID: String!) {
  getBilling(UserID: $UserID, BillingID: $BillingID) {
    %columns%
  }
}
`;
export const listBillings = `query ListBillings(
  $filter: TableBillingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      %columns%
    }
    nextToken
  }
}
`;
export const queryBillingsByDatedBillingIdIndex = `query QueryBillingsByDatedBillingIdIndex(
  $Dated: String!
  $first: Int
  $after: String
  $BillingID: String
) {
  queryBillingsByDatedBillingIDIndex(
    Dated: $Dated
    first: $first
    after: $after
    BillingID: $BillingID
  ) {
    items {
      BillingID
      Dated
      UserID
      Amount
      TotalAmount
      DeliverDate
      StartDate
      EndDate
      ExpectedDate
      OrderKinds
      OrderStatus
      PID
      PKGID
      PLID
      UserIDBuyer
      UserIDSeller
      Status
      MileageCode
    }
    nextToken
  }
}
`;
export const getPayment = `query GetPayment($ID: Int!) {
  getPayment(ID: $ID) {
    ID
    USERID
    OID
    price
  }
}
`;
export const getCharges = `query GetCharges(
  $USERID: Int!
  $type: String
  $startDate: String
  $endDate: String
  $limit: Int
) {
  getCharges(
    USERID: $USERID
    type: $type
    startDate: $startDate
    endDate: $endDate
    limit: $limit
  ) {
    id
    parent_id
    checkout_id
    USERID
    DOID
    OID
    amount
    type
    memo
    created_at
    updated_at
    provider
    provider_id
  }
}
`;
