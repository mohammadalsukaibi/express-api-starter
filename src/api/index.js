const express = require('express');

const emojis = require('./emojis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    items: [
      {
        crNumber: 1010000457,
        mainCrNumber: null,
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'مؤسسة الهويمل للتجهيزات المكتبية',
        expiryDate: '2022-07-19T00:00:00',
        totalCount: 25,
        isMain: true,
        remainingExpiryDays: 551,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'D',
          nameAr: 'مشطوب',
          nameEn: 'Canceled'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 1,
          nameAr: 'مؤسسة',
          nameEn: 'Establishment'
        },
        parties: [
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          }
        ]
      },
      {
        crNumber: 1010005756,
        mainCrNumber: '1010000457',
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'محطة اليمامه للمحروقات لصاحبها- راشد محمد راشد الهويمل .',
        expiryDate: '1976-02-11T00:00:00',
        totalCount: 25,
        isMain: false,
        remainingExpiryDays: 17511,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'D',
          nameAr: 'مشطوب',
          nameEn: 'Canceled'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 11,
          nameAr: 'محطة',
          nameEn: 'Station'
        },
        parties: []
      },
      {
        crNumber: 1010041491,
        mainCrNumber: null,
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'المؤسسه السعوديه للقرطاسيه',
        expiryDate: '2019-10-17T00:00:00',
        totalCount: 25,
        isMain: true,
        remainingExpiryDays: 1557,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'D',
          nameAr: 'مشطوب',
          nameEn: 'Canceled'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: null,
        parties: [
          {
            nationalId: '1022999047',
            name: 'عبدالعزيز راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          },
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '24',
              nameAr: 'مدير',
              nameEn: 'Director'
            }
          }
        ]
      },
      {
        crNumber: 1010088136,
        mainCrNumber: null,
        crNationalNumber: 7001512289.0,
        mainNationalCRNumber: null,
        crName: 'امل',
        expiryDate: '2024-05-13T00:00:00',
        totalCount: 25,
        isMain: true,
        remainingExpiryDays: 113,
        businessType: {
          id: '204',
          nameAr: 'ذات مسئوليةمحدودة',
          nameEn: 'Limited liability'
        },
        crStatus: {
          id: 'A',
          nameAr: 'فعال',
          nameEn: 'Active'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: null,
        parties: [
          {
            nationalId: '1008014746',
            name: 'فاطمت محمد عيسى بهكلي',
            mobileNo: '0558393587',
            emailAddress: null,
            relationType: {
              id: '02',
              nameAr: 'شــريك',
              nameEn: 'Partner'
            }
          },
          {
            nationalId: '1001181682',
            name: 'محمد بن راشد بن محمد الهويمل',
            mobileNo: '0558393587',
            emailAddress: null,
            relationType: {
              id: '24',
              nameAr: 'مدير',
              nameEn: 'Director'
            }
          }
        ]
      },
      {
        crNumber: 1010091588,
        mainCrNumber: '1010088136',
        crNationalNumber: null,
        mainNationalCRNumber: 7001512289.0,
        crName: ' مؤسسة علي محمد احمد بهكلي للتجاره',
        expiryDate: '1996-12-17T00:00:00',
        totalCount: 25,
        isMain: false,
        remainingExpiryDays: 9896,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'D',
          nameAr: 'مشطوب',
          nameEn: 'Canceled'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 1,
          nameAr: 'مؤسسة',
          nameEn: 'Establishment'
        },
        parties: []
      },
      {
        crNumber: 1010135832,
        mainCrNumber: null,
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'مؤسسة بيت الوطنيه للتجاره',
        expiryDate: '2019-09-11T00:00:00',
        totalCount: 25,
        isMain: true,
        remainingExpiryDays: 1593,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'D',
          nameAr: 'مشطوب',
          nameEn: 'Canceled'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 1,
          nameAr: 'مؤسسة',
          nameEn: 'Establishment'
        },
        parties: [
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          }
        ]
      },
      {
        crNumber: 1010138981,
        mainCrNumber: '1010138982',
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'مؤسسه الليالي السبع للتجاره',
        expiryDate: '2020-02-12T00:00:00',
        totalCount: 25,
        isMain: false,
        remainingExpiryDays: 1439,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'A',
          nameAr: 'فعال',
          nameEn: 'Active'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 1,
          nameAr: 'مؤسسة',
          nameEn: 'Establishment'
        },
        parties: [
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '26',
              nameAr: 'مدير فرع',
              nameEn: 'Branch Manager'
            }
          },
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '26',
              nameAr: 'مدير فرع',
              nameEn: 'Branch Manager'
            }
          },
          {
            nationalId: '1022999047',
            name: 'عبدالعزيز راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          }
        ]
      },
      {
        crNumber: 1010138982,
        mainCrNumber: null,
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'مؤسسة دار المكاتب  للتجارة',
        expiryDate: '2019-02-23T00:00:00',
        totalCount: 25,
        isMain: true,
        remainingExpiryDays: 1793,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'A',
          nameAr: 'فعال',
          nameEn: 'Active'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 1,
          nameAr: 'مؤسسة',
          nameEn: 'Establishment'
        },
        parties: [
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '26',
              nameAr: 'مدير فرع',
              nameEn: 'Branch Manager'
            }
          },
          {
            nationalId: '1022999047',
            name: 'عبدالعزيز راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          }
        ]
      },
      {
        crNumber: 1010141158,
        mainCrNumber: '1131004720',
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'مصنع دار الاثاث الخشبي والمعدني لصاحبه محمد راشد محمد الهويمل',
        expiryDate: '2020-12-01T00:00:00',
        totalCount: 25,
        isMain: false,
        remainingExpiryDays: 1146,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'A',
          nameAr: 'فعال',
          nameEn: 'Active'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 19,
          nameAr: 'مصنع',
          nameEn: 'Factory'
        },
        parties: [
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          }
        ]
      },
      {
        crNumber: 1010141160,
        mainCrNumber: '1131004720',
        crNationalNumber: null,
        mainNationalCRNumber: null,
        crName: 'مكتبه دار الكلمه لصاحبها محمد راشد محمد الهويمل',
        expiryDate: '2020-03-06T00:00:00',
        totalCount: 25,
        isMain: false,
        remainingExpiryDays: 1416,
        businessType: {
          id: '101',
          nameAr: 'مؤســـسة فـــردية',
          nameEn: ' Individual-owned Establishments'
        },
        crStatus: {
          id: 'K',
          nameAr: 'موقوف لاسباب مختلفة (غش، تستر، قاضي التنفيذ)',
          nameEn: 'Suspended'
        },
        city: {
          id: '1010',
          nameAr: 'الرياض',
          nameEn: 'Riyadh'
        },
        region: {
          id: 1,
          nameAr: ' الرياض',
          nameEn: 'Riyadh'
        },
        crType: {
          id: 3,
          nameAr: 'مكتب',
          nameEn: 'Office'
        },
        parties: [
          {
            nationalId: '1001181682',
            name: 'محمد راشد محمد الهويمل',
            mobileNo: null,
            emailAddress: null,
            relationType: {
              id: '01',
              nameAr: 'مالك المؤسسة',
              nameEn: 'Owner'
            }
          }
        ]
      }
    ],
    pageNumber: 1,
    totalPages: 3,
    totalCount: 25,
    totalReturnedRecords: 25,
    hasPreviousPage: false,
    hasNextPage: true
  });
});

router.use('/emojis', emojis);

module.exports = router;
