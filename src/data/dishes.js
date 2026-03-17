// Shared dish data used by Features grid and DishDetailPage
export const dishes = [
  {
    id: 'com-ga-xoi-mo',
    image: '/images/dish_com_ga.png',
    name: 'Cơm gà xối mỡ',
    category: 'Món Á',
    description: 'Cơm trắng dẻo thơm, gà chiên vàng giòn xối mỡ nóng, ăn kèm dưa leo và nước chấm đặc biệt.',
    tags: ['Phổ biến', 'Văn phòng', 'Gia đình'],
    details: {
      calories: '~650 kcal',
      servingSize: '1 người',
      prepTime: '20 phút',
      ingredients: [
        'Gà ta tươi, ướp gia vị đặc biệt',
        'Cơm gạo Jasmine dẻo thơm',
        'Dưa leo, rau thơm tươi',
        'Nước chấm chua ngọt đặc trưng',
        'Hành phi vàng giòn'
      ]
    }
  },
  {
    id: 'bo-luc-lac',
    image: '/images/dish_bo_luc_lac.png',
    name: 'Bò lúc lắc sốt tiêu đen',
    category: 'Món Á – Âu',
    description: 'Thịt bò Mỹ hảo hạng xào tỏi bơ, sốt tiêu đen đậm đà, dùng kèm cơm trắng hoặc khoai tây chiên.',
    tags: ['Cao cấp', 'Đặc biệt'],
    details: {
      calories: '~720 kcal',
      servingSize: '1 người',
      prepTime: '25 phút',
      ingredients: [
        'Thịt bò Mỹ (thăn nội) cắt vuông',
        'Bơ lạt Anchor, tỏi băm',
        'Sốt tiêu đen đặc chế',
        'Ớt chuông đỏ, hành tây',
        'Cơm trắng hoặc khoai tây chiên'
      ]
    }
  },
  {
    id: 'bun-bo-hue',
    image: '/images/dish_bun_bo_hue.png',
    name: 'Bún bò Huế',
    category: 'Món Việt',
    description: 'Nước dùng hầm xương đậm vị, tôm cua chắc thịt, rau sống tươi mát — đặc sản miền Trung mỗi ngày.',
    tags: ['Truyền thống', 'Dinh dưỡng'],
    details: {
      calories: '~580 kcal',
      servingSize: '1 tô lớn',
      prepTime: 'Hầm 4-6 giờ',
      ingredients: [
        'Bún tươi sợi to đặc trưng Huế',
        'Xương heo, giò heo hầm mềm',
        'Chả Huế, tiết heo',
        'Sả, mắm ruốc — gia vị đặc trưng',
        'Rau sống: giá, rau muống, chuối bắp'
      ]
    }
  },
  {
    id: 'salad-ga-quinoa',
    image: '/images/dish_salad_ga.png',
    name: 'Salad ức gà quinoa',
    category: 'Healthy',
    description: 'Ức gà áp chảo mềm mọng, quinoa giàu đạm, rau xanh tươi, sốt mè rang thanh nhẹ.',
    tags: ['Healthy', 'Ít calo', 'Dinh dưỡng'],
    details: {
      calories: '~420 kcal',
      servingSize: '1 phần',
      prepTime: '15 phút',
      ingredients: [
        'Ức gà ta áp chảo không dầu',
        'Quinoa hữu cơ giàu protein',
        'Rau xà lách, cải kale, cà chua bi',
        'Bơ, dưa leo, cà rốt bào sợi',
        'Sốt mè rang ít béo đặc chế'
      ]
    }
  },
  {
    id: 'canh-chua-ca-loc',
    image: '/images/dish_canh_chua.png',
    name: 'Canh chua cá lóc',
    category: 'Món Việt',
    description: 'Cá lóc đồng tươi, nước dùng chua thanh từ me, thơm, cà chua kết hợp giá và rau om.',
    tags: ['Truyền thống', 'Gia đình'],
    details: {
      calories: '~310 kcal',
      servingSize: '2–3 người',
      prepTime: '30 phút',
      ingredients: [
        'Cá lóc đồng tươi làm sạch',
        'Me chua nguyên chất',
        'Thơm (dứa), cà chua, đậu bắp',
        'Giá đỗ, rau om, ngò gai',
        'Nước mắm ngon, muối, đường'
      ]
    }
  },
  {
    id: 'ca-ri-ga-coconut',
    image: '/images/dish_ca_ri_ga.png',
    name: 'Cà ri gà coconut',
    category: 'Món Á',
    description: 'Gà ta hầm mềm trong nước cốt dừa béo ngậy, gia vị cà ri thơm nồng, dùng kèm bánh mì hoặc cơm.',
    tags: ['Phổ biến', 'Đặc biệt'],
    details: {
      calories: '~680 kcal',
      servingSize: '1–2 người',
      prepTime: '45 phút',
      ingredients: [
        'Gà ta chặt miếng vừa ăn',
        'Nước cốt dừa tươi nguyên chất',
        'Khoai tây, cà rốt hầm mềm',
        'Bột cà ri Ấn Độ, sả, gừng',
        'Bánh mì baguette hoặc cơm trắng'
      ]
    }
  }
]
