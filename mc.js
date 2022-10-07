
//Input
var toDealYourPhone;
var waitMintToLeaveMsg;
var mintForQualityPitch;
var mintToPreareNextCall;
var minutsPerHoure;
var hourYourWorkPerDay;
var freeSnipitSigne;
var compeletedInslall;
var dailyWebsiteVisitorPerSignup;
var decryptedLeads;
var decryptedLeadsSold;
var costPerLead;
var daysWorkedPerMonth;
var yourHourlyAvgEarnigNow;
var daysWorkperMonthNow;

var workhourPerDay;

var Affiliate_shares_of_all_bought_leads = (20/100)  ;

//Output
var MINUTES_NEEDED_PER_CONTACT;
var CONTACT_HOUR;
var DAILY_SIGNUPS;
var OVER_ALL_EARNING_HOURE;
var TOTAL_HOURES_WORKED_PER_MONTH;
var TOTAL_EARING_IN_3_MONTHS;
var ANNUAL_INCOME_IN_THIS_NEW_LEVEL;
var DEALY_EARNIG;
var WEEKLY_EARNING;
var MONTHLY_EARNING;
var MONTH_3_EARNING;
// var DESIRED_HOURLY_$$_PAY=0;
var COMPAPARE_SYSTEM_EARNIG_HOUR;
var MONTHLY_HOUR_YOU_WORK_NOW;
var CURRENT_EARNING_IN_3_MONTHS;
var YOUR_CURRENT_ANNUAL_BASE_INCOME;



//calculate function
function calculate() {
  //get inputs
  toDealYourPhone = parseFloat(document.getElementById("toDealYourPhone").value);

  workhourPerDay = parseFloat(document.getElementById("workhourPerDay").value);

  waitMintToLeaveMsg = parseFloat(document.getElementById("waitMintToLeaveMsg").value);

  mintForQualityPitch = parseFloat(document.getElementById("mintForQualityPitch").value);

  mintToPreareNextCall = parseFloat(document.getElementById("mintToPreareNextCall").value);

  minutsPerHoure= parseFloat(document.getElementById("minutsPerHoure").value);

  hourYourWorkPerDay = parseFloat(document.getElementById("hourYourWorkPerDay").value);

  freeSnipitSigne = parseFloat(document.getElementById("freeSnipitSigne").value);

  compeletedInslall= parseFloat(document.getElementById("compeletedInslall").value);
  
  dailyWebsiteVisitorPerSignup = parseFloat(document.getElementById("dailyWebsiteVisitorPerSignup").value);

 decryptedLeads = parseFloat(document.getElementById("decryptedLeads").value);

 decryptedLeadsSold = parseFloat(document.getElementById("decryptedLeadsSold").value);

 costPerLead = parseFloat(document.getElementById("costPerLead").value);

 daysWorkedPerMonth = parseFloat(document.getElementById("daysWorkedPerMonth").value);

 yourHourlyAvgEarnigNow = parseFloat(document.getElementById("yourHourlyAvgEarnigNow").value);

 daysWorkperMonthNow = parseFloat(document.getElementById("daysWorkperMonthNow").value);



  // Zero / clear inputs if unassigned
  toDealYourPhone = toDealYourPhone|| 0;
  waitMintToLeaveMsg = waitMintToLeaveMsg || 0;
  mintForQualityPitch =  mintForQualityPitch || 0;
  mintToPreareNextCall =  mintToPreareNextCall || 0;
  minutsPerHoure = minutsPerHoure || 0;
  hourYourWorkPerDay = hourYourWorkPerDay || 0;
  freeSnipitSigne = freeSnipitSigne || 0;
  compeletedInslall = compeletedInslall || 0;
  dailyWebsiteVisitorPerSignup = dailyWebsiteVisitorPerSignup || 0;
  costPerLead = costPerLead || 0;
  daysWorkedPerMonth = daysWorkedPerMonth || 0;
  yourHourlyAvgEarnigNow = yourHourlyAvgEarnigNow || 0;
  daysWorkperMonthNow =  daysWorkperMonthNow || 0;


  MINUTES_NEEDED_PER_CONTACT =  toDealYourPhone  + waitMintToLeaveMsg +  mintForQualityPitch + mintToPreareNextCall;

  CONTACT_HOUR = (60 - minutsPerHoure)/17;

  DAILY_SIGNUPS = CONTACT_HOUR * hourYourWorkPerDay * (freeSnipitSigne/100);

  OVER_ALL_EARNING_HOURE = MONTH_3_EARNING / hourYourWorkPerDay;

  TOTAL_HOURES_WORKED_PER_MONTH = daysWorkedPerMonth * hourYourWorkPerDay;

  TOTAL_EARING_IN_3_MONTHS = daysWorkedPerMonth * MONTH_3_EARNING;

  ANNUAL_INCOME_IN_THIS_NEW_LEVEL = (TOTAL_EARING_IN_3_MONTHS * 4);

  DEALY_EARNIG = DAILY_SIGNUPS * dailyWebsiteVisitorPerSignup * (compeletedInslall/100) *  (decryptedLeads/100) * costPerLead * (decryptedLeadsSold/100) * Affiliate_shares_of_all_bought_leads;

  WEEKLY_EARNING =  DEALY_EARNIG * 7;

  MONTHLY_EARNING =  WEEKLY_EARNING * 4.3;

  MONTH_3_EARNING = MONTHLY_EARNING * 3;

  COMPAPARE_SYSTEM_EARNIG_HOUR = OVER_ALL_EARNING_HOURE;

  MONTHLY_HOUR_YOU_WORK_NOW = daysWorkedPerMonth * workhourPerDay;

  CURRENT_EARNING_IN_3_MONTHS = yourHourlyAvgEarnigNow * MONTHLY_HOUR_YOU_WORK_NOW * 3;

  YOUR_CURRENT_ANNUAL_BASE_INCOME =  CURRENT_EARNING_IN_3_MONTHS * 4;


  




  // totalDailyVisitor = (newDailyLeads / (visitorsWhoBecomesLeadsUsually / 100))
  // paidDailyVisitors = ((EstimatedPerPaidTraffic * totalDailyVisitor) / 100)
  // freeDailyVisitor = (totalDailyVisitor - paidDailyVisitors)
  // extraLeadFromMagicSnippet = extraLeadsPerFromMagicSnippet * totalDailyVisitor * 0.98;
  // dailyVisitorWhoAreLostLead = totalDailyVisitor - newDailyLeads - extraLeadFromMagicSnippet;
  // perOfVisitorWhoAreUndentiable = ((dailyVisitorWhoAreLostLead / totalDailyVisitor) * 100);
  // totalLeadsCostperDay =  (costPerPaidVisitor * paidDailyVisitors) +  (codePermagicSnippetLead *  extraLeadsPerFromMagicSnippet * totalDailyVisitor * 0.98);
  // costPerLead =  totalLeadsCostperDay / (newDailyLeads + extraLeadFromMagicSnippet);
  // leedsNeededPerSale = costPerLead * leadsNeedTCreateEachSale;
  // profitperSale =
  //   (revenuePerSale - Cogs - costPerLead * leadsNeedTCreateEachSale)
  // salesPerDay =
  //   (newDailyLeads + extraLeadFromMagicSnippet) / leadsNeedTCreateEachSale;
  // profitperDay = profitperSale * salesPerDay;
  // profitPer5DayWeek = profitperDay * 5;
  // profitPer50Weeks = profitPer5DayWeek * 50;
  // dailyMoneyWastedonUnidentifiableVisitors =
  //   ((dailyVisitorWhoAreLostLead *
  //     EstimatedPerPaidTraffic *
  //     costPerPaidVisitor) /
  //     100)



  //  TDV = Calculating;

  // display results
  //   document.getElementById("TotalDailyVisitor").innerHTML;
  document.getElementById("MINUTES_NEEDED_PER_CONTACT").innerText = MINUTES_NEEDED_PER_CONTACT.toLocaleString(undefined, {maximumFractionDigits: 0});;
  document.getElementById("MONTHLY_EARNING").innerText = MONTHLY_EARNING.toLocaleString(undefined, {maximumFractionDigits: 0});;
  
  document.getElementById("CONTACT_HOUR").innerText = CONTACT_HOUR.toLocaleString(undefined, { maximumFractionDigits: 0 });

  document.getElementById("DAILY_SIGNUPS").innerText = DAILY_SIGNUPS.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("OVER_ALL_EARNING_HOURE").innerText = OVER_ALL_EARNING_HOURE.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("TOTAL_HOURES_WORKED_PER_MONTH").innerText = OVER_ALL_EARNING_HOURE.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("TOTAL_EARING_IN_3_MONTHS").innerText =  TOTAL_EARING_IN_3_MONTHS.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("ANNUAL_INCOME_IN_THIS_NEW_LEVEL").innerText = ANNUAL_INCOME_IN_THIS_NEW_LEVEL.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("DEALY_EARNIG").innerText = DEALY_EARNIG.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("WEEKLY_EARNING").innerText = WEEKLY_EARNING.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("MONTH_3_EARNING").innerText = MONTH_3_EARNING.toLocaleString(undefined, {maximumFractionDigits: 0});;

  // document.getElementById("DESIRED_HOURLY_$$_PAY").innerText = DESIRED_HOURLY_$$_PAY.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("COMPAPARE_SYSTEM_EARNIG_HOUR").innerText = COMPAPARE_SYSTEM_EARNIG_HOUR.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("MONTHLY_HOUR_YOU_WORK_NOW").innerText = MONTHLY_HOUR_YOU_WORK_NOW.toLocaleString(undefined, {maximumFractionDigits: 0});;

  document.getElementById("CURRENT_EARNING_IN_3_MONTHS").innerText = CURRENT_EARNING_IN_3_MONTHS.toLocaleString(undefined, {maximumFractionDigits: 0});;
  
  document.getElementById("YOUR_CURRENT_ANNUAL_BASE_INCOME").innerText = YOUR_CURRENT_ANNUAL_BASE_INCOME.toLocaleString(undefined, {maximumFractionDigits: 0});;

  // document.getElementById("TOTAL_HOURES_WORKED_PER_MONTH").innerText =
  // OVER_ALL_EARNING_HOURE.toLocaleString(undefined, {
  //     maximumFractionDigits: 2
  //   }) + "%";
  // document.getElementById("TOTAL_HOURES_WORKED_PER_MONTH").innerText =
  //   "$" + TOTAL_HOURES_WORKED_PER_MONTH.toLocaleString(undefined, {
  //     maximumFractionDigits: 2, minimumFractionDigits:2
  //   });;
  // document.getElementById("costPerLead").innerText = "$" + costPerLead;
  // document.getElementById("leedsNeededPerSale").innerText =
  //   "$" + leedsNeededPerSale.toLocaleString(undefined, {
  //     maximumFractionDigits: 2
  //   });


/*
if (profitperSale< 0){

  document.getElementById("profitperSaleb").innerText = "-$" + (profitperSale* -1).toLocaleString(undefined, {
      maximumFractionDigits: 2});;
      document.getElementById("profitperSaleb").style.color ='red'
}
else{document.getElementById("profitperSaleb").innerText = "$" + profitperSale.toLocaleString(undefined, {
  maximumFractionDigits: 2})
  document.getElementById("profitperSaleb").style.color ='white'
}
*/
  
  // document.getElementById("profitperDay").innerText =
  //   "$" +
  //   profitperDay.toLocaleString(undefined, {
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 2,
  //   });
  // document.getElementById("profitPer5DayWeek").innerText = "$" + profitPer5DayWeek;
  // document.getElementById("profitPer50Weeks").innerText = "$" + profitPer50Weeks;

  /*
  if (dailyMoneyWastedonUnidentifiableVisitors<0){

    document.getElementById("dailyMoneyWastedonUnidentifiableVisitors").innerText =
    "-$" + (dailyMoneyWastedonUnidentifiableVisitors*-1).toLocaleString(undefined, {
      maximumFractionDigits: 2
    });;
    document.getElementById("dailyMoneyWastedonUnidentifiableVisitors").style.color='red'
  }
  else{

    document.getElementById("dailyMoneyWastedonUnidentifiableVisitors").innerText =
    "$" + dailyMoneyWastedonUnidentifiableVisitors.toLocaleString(undefined, {
      maximumFractionDigits: 2
    });;
    document.getElementById("dailyMoneyWastedonUnidentifiableVisitors").style.color='white'
  }

  // document.getElementById('dailyMoneyWastedonUnidentifiableVisitorsbar').style.width = dailyMoneyWastedonUnidentifiableVisitors + "%";
  // document.getElementById('dailyMoneyWastedonUnidentifiableVisitorsbar2').style.width = (100-dailyMoneyWastedonUnidentifiableVisitors) + "%";
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  document.getElementById("paidDailyVisitors").innerText = (paidDailyVisitors).toLocaleString(undefined, { maximumFractionDigits: 0 });



  document.getElementById("extraLeadFrommagiucPer").innerText =
    (extraLeadFromMagicSnippet).toLocaleString(undefined, { maximumFractionDigits: 0 }); + "%";




  document.getElementById("clp").innerText = "$" +
    (costPerLead).toLocaleString(undefined, { maximumFractionDigits: 2 });;

  document.getElementById("leadCostPerDay").innerText = "$"
    + (totalLeadsCostperDay).toLocaleString(undefined, { maximumFractionDigits: 2 });;




  document.getElementById("salesperDaydivper").innerText = (salesPerDay).toLocaleString(undefined, { maximumFractionDigits: 0 });;

if(profitperDay < 0){

  document.getElementById("profitperDaydivper").innerText = "- $" + ( profitperDay * -1).toLocaleString(undefined, { maximumFractionDigits: 2 });
  document.getElementById("profitperDaydivper").style.color ='red'
}
else{
  document.getElementById("profitperDaydivper").innerText = "$" + ( profitperDay).toLocaleString
  (undefined, { maximumFractionDigits: 2 });
  document.getElementById("profitperDaydivper").style.color ='white'
}

if(profitPer5DayWeek<0){

  document.getElementById("profitper5Daydivper").innerText ="-$" + (profitPer5DayWeek* -1).toLocaleString(undefined, { maximumFractionDigits: 2 });
  document.getElementById("profitper5Daydivper").style.color ='red'
}
else{
  document.getElementById("profitper5Daydivper").innerText ="$" + (profitPer5DayWeek).toLocaleString(undefined, { maximumFractionDigits: 2 });
  document.getElementById("profitper5Daydivper").style.color ='white'
}

if (profitPer50Weeks<0){
  document.getElementById("profitper50Daydivper").innerText ="-$" + (profitPer50Weeks*-1).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits:2 });
  document.getElementById("profitper50Daydivper").style.color ='red'
}
else{

  document.getElementById("profitper50Daydivper").innerText ="$" + (profitPer50Weeks).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits:2 });
  document.getElementById("profitper50Daydivper").style.color ='white'
}
  document.getElementById("profitOf1000000").innerText = (100000 / profitPer5DayWeek).toLocaleString(undefined, { maximumFractionDigits: 2 });
*/

  //   if (document.getElementById("TotalDailyVisitor") != null) {
  //     document.getElementById("TotalDailyVisitor").innerHTML = Calculating;
}
//   Calculating.toLocaleString(undefined, {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
//   out_put.innerHTML = 2;
