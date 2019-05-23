// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateBilling = `subscription OnCreateBilling($BillingID: String, $Dated: String, $UserID: Int) {
  onCreateBilling(BillingID: $BillingID, Dated: $Dated, UserID: $UserID) {
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
`;
export const onUpdateBilling = `subscription OnUpdateBilling($BillingID: String, $Dated: String, $UserID: Int) {
  onUpdateBilling(BillingID: $BillingID, Dated: $Dated, UserID: $UserID) {
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
`;
export const onDeleteBilling = `subscription OnDeleteBilling($BillingID: String, $Dated: String, $UserID: Int) {
  onDeleteBilling(BillingID: $BillingID, Dated: $Dated, UserID: $UserID) {
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
`;
