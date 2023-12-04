import {PdfDocument} from"@ironsoftware/ironpdf"
import fs from 'fs';


// HTML to PDF
const createPDF = async () => {
    const startTime = new Date();
    // Render the HTML string
//     const html = `
//
//       <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
//       <html lang="en">
//       <head>
//         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <title></title>
//         <style>
//           @font-face {
//             font-family: ArialFont;
//             src: url(../fonts/arial.ttf);
//           }
//
//         </style>
//
//   <style>
//
//   * {
//   font-size: inherit;
//   font-family: inherit;
//   background-color: inherit;
// }
//
// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header, hgroup,
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   font: inherit;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, hgroup, menu, nav, section {
//   display: block;
// }
//
// svg {
//   background-color: transparent;
// }
// body {
//   line-height: 1;
//   font-family: ArialFont;
//   font-size: undefined;
//   background: undefined;
// }
// ol, ul {
//   list-style: none;
// }
// blockquote, q {
//   quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
//   content: '';
//   content: none;
// }
// table {
//   border-collapse: collapse;
//   border-spacing: 0;
// }
// .tooltip {
//   position: relative;
//   display: inline-block;
//   border: 2px solid black;
//   margin-left: 10px;
//   border-radius: 12px;
//   text-align: center;
//   width: 15px;
//   height: 15px;
//   font-size: 15px;
// }
//
// .tooltip .tooltiptext {
//   visibility: hidden;
//   min-width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   border-radius: 6px;
//   padding: 5px 5px;
//   position: absolute;
//   z-index: 1;
//   bottom: 132%;
//   left: -22%;
// }
//
// .tooltip .tooltiptext::after {
//   content: "";
//   position: absolute;
//   top: 100%;
//   left: 5%;
//   border-width: 5px;
//   border-style: solid;
//   border-color: black transparent transparent transparent;
// }
//
// .tooltip:hover .tooltiptext {
//   visibility: visible;
// }
// .submit-modal {
//   position: fixed;
//   display: none;
//   top: 0;
//   left: 0;
//   z-index: 1010;
//   height:100%;
//   width:100%;
//   padding-top: 150px;
//   padding-bottom: 100px;
//   overflow:auto;
//   background-color: rgba(46, 68, 107, 0.9);
// }
// .modal-content {
//   background-color: #fefefe;
//   margin: auto;
//   padding: 20px;
//   overflow: auto;
//   width: 40%;
//   max-width: 80%;
//   height: auto;
//   max-height: 80%;
//   border: 5px solid #008ea1;
// }
// .modal-close {
//   color: #aaaaaa;
//   float: right;
//   font-size: 28px;
//   font-weight: bold;
//   margin-bottom: 30px;
//   cursor: pointer;
//
// }
// .modal-text{
//  padding: 20px;
//
// }
// .disable-message-div{
//   padding: 10px;
//   text-align: left;
//   color: red;
//   font-size: 16px;
//   font-weight: 700;
//
// }
//
// @media screen and (max-width: 575px){
//   .recaptcha-error {
//     transform:scale(0.82);
//     -webkit-transform:scale(0.82);
//     transform-origin:0 0;
//     -webkit-transform-origin:0 0;
//     margin-left:50px;
//   }
// }
//
// /* styles for checkbox starts */
// .container {
//   display: block;
//   position: relative;
//   padding-left: 25px;
//   margin: 10px 0px;
//   cursor: pointer;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }
//
// .container input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
//   left: -5px;
//
// }
// .checkmark {
//   position: absolute;
//   left: 0;
//   top: -2px;
//   height: 16px;
//   width: 16px;
//   border-radius: 3px;
//   background: linear-gradient(180deg, #ffffff 6.25%, #f0f3f5 100%);
//   border: 1px solid rgba(25, 44, 77, 0.2);
//   box-shadow: 0px 1px 2px rgba(17, 55, 78, 0.08);
// }
//
// /* When the checkbox is checked, add a blue background */
// .container input:checked ~ .checkmark {
//   background: linear-gradient(12.31deg, #1e5679 31.49%, #009eb3 275.13%);
//   box-shadow: 0px 1px 2px rgba(17, 55, 78, 0.08);
// }
//
// /* Create the checkmark/indicator (hidden when not checked) */
// .checkmark:after {
//   content: "";
//   position: absolute;
//   display: none;
// }
//
// /* Show the checkmark when checked */
// .container input:checked ~ .checkmark:after {
//   display: block;
// }
//
// /* Style the checkmark/indicator */
// .container .checkmark:after {
//   left: 6px;
//   top: 2px;
//   width: 3px;
//   height: 8px;
//   border: solid white;
//   border-width: 0 2px 2px 0;
//   -webkit-transform: rotate(45deg);
//   -ms-transform: rotate(45deg);
//   transform: rotate(45deg);
// }
// /* styles for checkbox ends */
//
//
//   </style>
//
//         <style type="text/css">
//         .mobile {
//           display: block !important;
//         }
//         .desktop {
//           display: none !important;
//         }
//         @media only screen and (min-width: 768px) {
//           .desktop {
//             display: block !important;
//           }
//           .mobile {
//             display: none !important;
//           }
//         }
//         </style><style type="text/css">
//         .mobile {
//           display: block !important;
//         }
//         .desktop {
//           display: none !important;
//         }
//         @media only screen and (min-width: 768px) {
//           .desktop {
//             display: block !important;
//           }
//           .mobile {
//             display: none !important;
//           }
//         }
//         </style><style type="text/css">
//         .mobile {
//           display: block !important;
//         }
//         .desktop {
//           display: none !important;
//         }
//         @media only screen and (min-width: 768px) {
//           .desktop {
//             display: block !important;
//           }
//           .mobile {
//             display: none !important;
//           }
//         }
//         </style><style type="text/css">
//         .mobile {
//           display: block !important;
//         }
//         .desktop {
//           display: none !important;
//         }
//         @media only screen and (min-width: 768px) {
//           .desktop {
//             display: block !important;
//           }
//           .mobile {
//             display: none !important;
//           }
//         }
//         </style>
//       </head>
//       <body style="margin:0; padding:0;line-height: 1;font-family: ArialFont;font-size: undefined">
// <div class="layoutCanvas_canvas__rptS3" style="height: 11in; width: 8.5in; display: flex; flex-direction: column; font-family: ArialFont; position: relative; background-color: white; color: black;"><span style="position: absolute; top: 0px; color: white; font-size: 12pt;">BOC</span><div class="layoutCanvas_recipientAddress__SjmoH" style="position: absolute; margin-top: 0.25in; margin-left: 5.96in; height: 0.5in; width: 2.25in; overflow: hidden;"><img src="https://infopub-offer-prod.s3.amazonaws.com/62774f3d-45b8-4707-8316-1546fd6db968.jpeg" alt="Logo" style="height: 0.5in; width: 2.25in; object-fit: contain;"></div><div class="layoutCanvas_recipientAddress__SjmoH" style="position: absolute; margin-top: 1.5625in; margin-left: 1.125in; height: 1.5in; width: 3.375in; overflow: hidden;"><div style="padding: 10px; font-size: 9pt; word-break: break-all; line-height: 0.2in;"><p>$udv_addr_name</p><p>$udv_addr_houseNo $udv_addr_streetName</p><p>$udv_addr_city $udv_addr_state $udv_addr_zipCode</p></div></div><div class="layoutCanvas_recipientAddress__SjmoH" style="position: absolute; margin-top: 0.25in; margin-left: 1.125in; height: 1in; width: 3.125in; overflow: hidden;"><pre style="font-size: 12pt; font-family: ArialFont; text-transform: uppercase;">ActivePoint
// 123 Active Way
// InfoPUB, CA 12345</pre></div><div class="layoutCanvas_content__H6rfO" style="margin-top: 3.625in; margin-left: 0.875in; position: absolute; background-color: white; font-family: ArialFont;"><div id="content" class="layoutCanvas_innerContent__+z6R1" style="height: 7.125in; width: 7.375in;"><div id="innerContent"><h1 style="text-align: center; font-size: 24px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">4th Nov 30k 34</h1><table width="100%"><tbody><tr><td style="height: 50%; width: 100%; padding: 10px 0px;"><a target="_blank"><div style="text-align: center;"><img id="root_ebae9_ae9b2" width="94" src="https://infopub-offer-prod.s3.amazonaws.com/f6a52d8c-8e10-4703-b00f-e0aa04d8626b.jpg" alt="tonjih media1" style="width: 94%;"></div></a></td></tr><tr><td style="height: 50px; width: 100%;"><table cellspacing="0" cellpadding="0" style="height: 100%; width: 100%;"><tbody><tr style="height: 10%;"><td><h1 style="font-size: 22px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">Talk up your Brand</h1></td></tr><tr style="height: 80%;"><td><div style="font-size: 9px; height: 100%;"><div style="color: rgb(0, 0, 0); padding: 0px; font-size: 14px; text-align: left; word-break: break-word; line-height: normal;"><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">$udv_txt_name  ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div></div></div></td></tr></tbody></table></td></tr></tbody></table><div id="DndDescribedBy-0" style="display: none;">
//     To pick up a draggable item, press the space bar.
//     While dragging, use the arrow keys to move the item.
//     Press space again to drop the item in its new position, or press escape to cancel.
//   </div><div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style="position: fixed; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;"></div></div></div></div></div><div class="layoutCanvas_canvas__rptS3" style="height: 11in; width: 8.5in; display: flex; flex-direction: column; background-color: white; color: black; font-family: ArialFont;"><div class="layoutCanvas_content__H6rfO" style="margin-top: 0.25in; margin-left: 0.875in;"><div id="content" class="layoutCanvas_innerContent__+z6R1" style="height: 10.5in; width: 7.375in; position: absolute; font-family: ArialFont; background-color: white;"><div id="innerContent"><h1 style="text-align: right; font-size: 24px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">4th Nov 30k 34 3Heading Page 2</h1><table class="" width="100%"><tbody><tr><td style="height: 100%; width: 50%; padding: 10px 10px 10px 0px;"><a target="_blank"><div><img id="root_3b154_541e1" width="100" src="https://infopub-offer-prod.s3.amazonaws.com/e2551bf4-4a46-4f41-b99b-3affa8d5203d.png" alt="test" style="width: 100%;"></div></a></td><td style="height: 100px; width: 50%; padding: 10px 0px;"><table cellspacing="0" cellpadding="0" style="height: 100%; width: 100%;"><tbody><tr style="height: 10%;"><td><h1 style="font-size: 22px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">Talk up your Brand</h1></td></tr><tr style="height: 80%;"><td><div style="font-size: 9px; height: 100%;"><div style="color: rgb(54, 166, 123); padding: 0px; font-size: 14px; background-color: rgb(204, 204, 225); text-align: left; word-break: break-word; line-height: normal;"><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, solu</span></span></span><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: bold; font-style: normal; text-decoration: none;"><span data-slate-string="true">ta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumqu</span></span></span><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">e a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut? $udv_txt_email </span></span></span></div></div></div></td></tr></tbody></table></td></tr></tbody></table><table width="100%"><tbody><tr><td style="height: 50%; width: 100%; padding: 10px 0px;"><a target="_blank"><div><img id="root_bf455_f4552" width="100" src="https://infopub-offer-prod.s3.amazonaws.com/8978de24-d8f7-4db1-9763-cb613c701e6e.jpeg" alt="027-correct-footage-color_1000x560.jpg" style="width: 100%;"></div></a></td></tr><tr><td style="height: 50px; width: 100%;"><table cellspacing="0" cellpadding="0" style="height: 100%; width: 100%;"><tbody><tr style="height: 10%;"><td style="padding: 10px; text-align: center;"><h1 style="font-size: 22px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">Talk up your Brand</h1></td></tr><tr style="height: 80%;"><td><div style="font-size: 9px; height: 100%;"><div style="color: rgb(0, 0, 0); padding: 0px; font-size: 14px; text-align: left; word-break: break-word; line-height: normal;"><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing</span></span></span><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: underline;"><span data-slate-string="true"> elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae comm</span></span></span><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">odi atque doloribus nam dolores aut?</span></span></span></div></div></div></td></tr></tbody></table></td></tr></tbody></table><h1 style="text-align: left; font-size: 44px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">Heading page 2 end</h1><div id="DndDescribedBy-1" style="display: none;">
//     To pick up a draggable item, press the space bar.
//     While dragging, use the arrow keys to move the item.
//     Press space again to drop the item in its new position, or press escape to cancel.
//   </div><div id="DndLiveRegion-1" role="status" aria-live="assertive" aria-atomic="true" style="position: fixed; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;"></div></div></div></div></div><div class="layoutCanvas_canvas__rptS3" style="height: 11in; width: 8.5in; display: flex; flex-direction: column; background-color: white; color: black; font-family: ArialFont;"><div class="layoutCanvas_content__H6rfO" style="margin-top: 0.25in; margin-left: 0.875in;"><div id="content" class="layoutCanvas_innerContent__+z6R1" style="height: 10.5in; width: 7.375in; position: absolute; font-family: ArialFont; background-color: white;"><div id="innerContent"><h1 style="text-align: center; font-size: 24px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">Heading 3&nbsp;4th Nov 30k 34</h1><table width="100%"><tbody><tr><td style="height: 50%; width: 100%; padding: 10px 0px;"><a target="_blank"><div><img id="root_d3ee8_ee87c" width="100" src="https://infopub-offer-prod.s3.amazonaws.com/e2551bf4-4a46-4f41-b99b-3affa8d5203d.png" alt="test" style="width: 100%;"></div></a></td></tr><tr><td style="height: 50px; width: 100%;"><table cellspacing="0" cellpadding="0" style="height: 100%; width: 100%;"><tbody><tr style="height: 10%;"><td><h1 style="font-size: 22px; color: rgb(0, 0, 0); padding: 10px 0px; font-weight: 700; word-break: break-word; line-height: 100%;">Talk up your Brand</h1></td></tr><tr style="height: 80%;"><td><div style="font-size: 9px; height: 100%;"><div style="color: rgb(0, 0, 0); padding: 0px; font-size: 14px; text-align: left; word-break: break-word; line-height: normal;"><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrup</span></span></span><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: bold; font-style: normal; text-decoration: none;"><span data-slate-string="true">ti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: bold; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: bold; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: bold; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat</span></span></span><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true"> dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, soluta iure reprehenderit accusantium explicabo quia laudantium corrupti, cumque a fugiat dolore enim vel recusandae commodi atque doloribus nam dolores aut?</span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-zero-width="n" data-slate-length="0"><br></span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-zero-width="n" data-slate-length="0"><br></span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-zero-width="n" data-slate-length="0"><br></span></span></span></div><div data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true" style="font-weight: normal; font-style: normal; text-decoration: none;"><span data-slate-string="true">Last $udv_txt_accountNumber </span></span></span></div></div></div></td></tr></tbody></table></td></tr></tbody></table><div id="DndDescribedBy-1" style="display: none;">
//     To pick up a draggable item, press the space bar.
//     While dragging, use the arrow keys to move the item.
//     Press space again to drop the item in its new position, or press escape to cancel.
//   </div><div id="DndLiveRegion-1" role="status" aria-live="assertive" aria-atomic="true" style="position: fixed; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;"></div></div></div></div></div>
//   </body>
//       </html>
//   `;
//     fs.writeFileSync('temp.html', html);
    console.log("step1")
    const pdf = await PdfDocument.fromHtml("temp.html");
    console.log("step2")

    // Export the PDF document
    await pdf.saveAs("ironPDF.pdf");
    console.log("step3")

    const endTime = new Date();

    console.log("Total consume time ", endTime - startTime)
};

createPDF()

