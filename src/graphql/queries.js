// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBilling = `query GetBilling($UserID: Int!, $BillingID: String!) {
  getBilling(UserID: $UserID, BillingID: $BillingID) {
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
}
`

export const listBillings = `query ListBillings(
  $filter: TableBillingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`

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
`
