import './style.scss'
import cn from 'clsx';
import { Fragment, useEffect, useRef } from 'react';
import * as prismic from '@prismicio/client'
import { isEmpty } from '@/js/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProjectDetailBody = ({ data, ...props }) => {
    const container = useRef()

    useGSAP(() => {
        const tlScrub = gsap.timeline({
            scrollTrigger: {
                trigger: '.proj-dtl-body-thumb',
                start: () => {
                    let offsetTop = container.current.querySelector('.proj-dtl-body-thumb').offsetTop
                    return `top top+=${offsetTop}`
                },
                scrub: true,
                // markers: true,
            }
        })

        tlScrub.to('.proj-dtl-body-thumb-inner', {
            yPercent: -9,
            ease: 'none'
        })
    }, {
        scope: container.current
    })

    useEffect(() => {
        // console.log(data.group_content_final_design);
    }, [])

    return (
        <section className='proj-dtl-body' ref={container}>
            <div className="container grid">
                <div className="proj-dtl-body-thumb-wrapper">
                    <div className="proj-dtl-body-thumb">
                        <div className="proj-dtl-body-thumb-inner">
                            <img src={data.thumbnail.url} alt={data.thumbnail.alt} width={data.thumbnail.dimensions.width} height={data.thumbnail.dimensions.height} className='img img-fill' />
                        </div>
                    </div>
                </div>
                {data.show_product_overview && (
                    <Fragment>
                        <div className="proj-dtl-body-show_product_overview-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-show_product_overview-label proj-dtl-body-label txt txt-up">({data.label_product_overview[0]?.text})</div>
                            <div className="proj-dtl-body-show_product_overview-sub proj-dtl-body-sub txt">{data.subtitle_product_overview[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_product_overview) && (
                            <div className="proj-dtl-body-product_overview-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-product_overview-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_product_overview) }} />
                            </div>
                        )}
                        {(!isEmpty(data.big_image_product_overview[0]?.image) && !isEmpty(data.big_image_product_overview)) && (
                            <div className="proj-dtl-body-product_overview-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_image_product_overview.map((item) => (
                                    <div className="proj-dtl-body-product_overview-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <div className="proj-dtl-body-product_overview-bigimg-inner proj-dtl-body-bigimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-bigimg-txt txt txt-16">{item.img.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {(!isEmpty(data.small_image_product_overview[0]?.image) && !isEmpty(data.small_image_product_overview)) && (
                            <div className="proj-dtl-body-product_overview-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_image_product_overview.map((item) => (
                                    <div className="proj-dtl-body-product_overview-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <div className="proj-dtl-body-product_overview-smallimg-inner proj-dtl-body-smallimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-smallimg-txt txt txt-16">{item.img.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_problem && (
                    <Fragment>
                        <div className="proj-dtl-body-product_overview-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-product_overview-label proj-dtl-body-label txt txt-up">({data.label_problem[0]?.text})</div>
                            <div className="proj-dtl-body-product_overview-sub proj-dtl-body-sub txt">{data.subtitle_propblem[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_problem) && (
                            <div className="proj-dtl-body-product_overview-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-product_overview-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_problem) }} />
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_challenges && (
                    <Fragment>
                        <div className="proj-dtl-body-challenges-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-challenges-label proj-dtl-body-label txt txt-up">({data.label_challenges[0]?.text})</div>
                            <div className="proj-dtl-body-challenges-sub proj-dtl-body-sub txt">{data.subtitle_challenges[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_challenges) && (
                            <div className="proj-dtl-body-challenges-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-challenges-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_challenges) }} />
                            </div>
                        )}
                        {!isEmpty(data.subdesc_challenges) && (
                            <div className={cn('proj-dtl-body-challenges-subdesc-wrapper proj-dtl-body-subdesc-wrapper', !isEmpty(data.desc_challenges) && 'gap-off')}>
                                {data.subdesc_challenges?.map((item, idx) => (
                                    <div className="proj-dtl-body-challenges-subdesc-item proj-dtl-body-subdesc" key={idx}>
                                        <div className="line line-ver" />
                                        <div className="proj-dtl-body-challenges-subdesc-item-title proj-dtl-body-subdesc-title txt txt-32">{item.title[0]?.text}</div>
                                        <div className="proj-dtl-body-challenges-subdesc-item-desc proj-dtl-body-subdesc-desc" dangerouslySetInnerHTML={{ __html: prismic.asHTML(item.desc) }} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_progress && (
                    <Fragment>
                        <div className="proj-dtl-body-progress-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-progress-label proj-dtl-body-label txt txt-up">({data.label_progress[0]?.text})</div>
                            <div className="proj-dtl-body-progress-sub proj-dtl-body-sub txt">{data.sub_progress[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_progress) && (
                            <div className="proj-dtl-body-progress-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-progress-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_progress) }} />
                            </div>
                        )}
                        {(!isEmpty(data.big_images_progress[0]?.image) && !isEmpty(data.big_images_progress)) && (
                            <div className="proj-dtl-body-progress-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_progress.map((item) => (
                                    <div className="proj-dtl-body-progress-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <div className="proj-dtl-body-progress-bigimg-inner proj-dtl-body-bigimg">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-bigimg-txt txt txt-16">{item.img.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {(!isEmpty(data.small_images_progress[0]?.image) && !isEmpty(data.small_images_progress)) && (
                            <div className="proj-dtl-body-progress-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_progress.map((item) => (
                                    <div className="proj-dtl-body-progress-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <div className="proj-dtl-body-progress-smallimg-inner proj-dtl-body-smallimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-smallimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_final_design && (
                    <Fragment>
                        <div className="proj-dtl-body-final_design-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-final_design-label proj-dtl-body-label txt txt-up">({data.label_final_design[0]?.text})</div>
                            <div className="proj-dtl-body-final_design-sub proj-dtl-body-sub txt">{data.subtitle_final_design[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_final_design) && (
                            <div className="proj-dtl-body-final_design-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-final_design-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_final_design) }} />
                            </div>
                        )}
                        {(!isEmpty(data.big_images_final_design[0]?.image) && !isEmpty(data.big_images_final_design)) && (
                            <div className="proj-dtl-body-final_design-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_final_design.map((item) => (
                                    <div className="proj-dtl-body-final_design-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <div className="proj-dtl-body-final_design-bigimg-inner proj-dtl-body-bigimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-bigimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {(!isEmpty(data.small_images_final_design[0]?.image) && !isEmpty(data.small_images_final_design)) && (
                            <div className="proj-dtl-body-final_design-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_final_design.map((item) => (
                                    <div className="proj-dtl-body-final_design-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <div className="proj-dtl-body-final_design-smallimg-inner proj-dtl-body-smallimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-smallimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.group_content_final_design) && (
                            <div className="proj-dtl-body-final_design-group_content-wrapper proj-dtl-body-group_content-wrapper">
                                {data.group_content_final_design.map((item, idx) => (
                                    <Fragment key={idx}>
                                        <div className="proj-dtl-body-final_design-group_content-content proj-dtl-body-group_content-content">
                                            <div className="proj-dtl-body-final_design-group_content-content-title proj-dtl-body-group_content-content-title h5" >
                                                {item.title[0]?.text}
                                            </div>
                                            {item.desc[0]?.text}
                                        </div>
                                        <div className="proj-dtl-body-final_design-group_content-img proj-dtl-body-group_content-img">
                                            {!isEmpty(item.media) ? (
                                                <video playsInline autoPlay muted loop className='img img-fill'>
                                                    <source src={item.media.url} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img src={item.image?.url} alt="" className='img img-fill' />
                                            )}
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_result && (
                    <Fragment>
                        <div className="proj-dtl-body-result-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-result-label proj-dtl-body-label txt txt-up">({data.label_result[0]?.text})</div>
                            <div className="proj-dtl-body-result-sub proj-dtl-body-sub txt">{data.subtitle_result[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_result) && (
                            <div className="proj-dtl-body-result-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-result-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_result) }} />
                            </div>
                        )}
                        {(!isEmpty(data.big_image_result[0]?.image) && !isEmpty(data.big_image_result)) && (
                            <div className="proj-dtl-body-result-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_image_result.map((item) => (
                                    <div className="proj-dtl-body-result-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <div className="proj-dtl-body-result-bigimg-inner proj-dtl-body-bigimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-bigimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {(!isEmpty(data.small_image_result[0]?.image) & !isEmpty(data.small_image_result)) && (
                            <div className="proj-dtl-body-result-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_image_result.map((item) => (
                                    <div className="proj-dtl-body-result-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <div className="proj-dtl-body-result-smallimg proj-dtl-body-smallimg">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-smallimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_takeaway && (
                    <Fragment>
                        <div className="proj-dtl-body-takeaway-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-takeaway-label proj-dtl-body-label txt txt-up">({data.label_takeaway[0]?.text})</div>
                            <div className="proj-dtl-body-takeaway-sub proj-dtl-body-sub txt">{data.subtitle_takeaway[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_takeaway) && (
                            <div className="proj-dtl-body-takeaway-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-takeaway-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_takeaway) }} />
                            </div>
                        )}
                        {!isEmpty(data.sub_describle_takeaway) && (
                            <div className={cn('proj-dtl-body-takeaway-subdesc-wrapper proj-dtl-body-subdesc-wrapper', !isEmpty(data.desc_takeaway) && 'gap-off')}>
                                {data.sub_describle_takeaway?.map((item, idx) => (
                                    <div className="proj-dtl-body-takeaway-subdesc-item proj-dtl-body-subdesc" key={idx}>
                                        <div className="line line-ver" />
                                        <div className="proj-dtl-body-takeaway-subdesc-item-title proj-dtl-body-subdesc-title txt txt-32">{item.title[0]?.text}</div>
                                        <div className="proj-dtl-body-takeaway-subdesc-item-desc proj-dtl-body-subdesc-desc" dangerouslySetInnerHTML={{ __html: prismic.asHTML(item.desc) }} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {(!isEmpty(data.big_images_takeaway[0]?.image) && !isEmpty(data.big_images_takeaway)) && (
                            <div className="proj-dtl-body-takeaway-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_takeaway.map((item) => (
                                    <div className="proj-dtl-body-takeaway-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <div className="proj-dtl-body-takeaway-bigimg proj-dtl-body-bigimg">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-bigimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {(!isEmpty(data.small_images_takeaway[0]?.image) && !isEmpty(data.small_images_takeaway)) && (
                            <div className="proj-dtl-body-takeaway-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_takeaway.map((item) => (
                                    <div className="proj-dtl-body-takeaway-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <div className="proj-dtl-body-takeaway-smallimg-inner proj-dtl-body-smallimg-inner">
                                            <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                        </div>
                                        {!isEmpty(item.image.alt) && (
                                            <div className="proj-dtl-body-smallimg-txt txt txt-16">{item.image.alt}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {
                    (
                        !data.show_product_overview &&
                        !data.show_problem &&
                        !data.show_challenges &&
                        !data.show_progress &&
                        !data.show_final_design &&
                        !data.show_takeaway) && (
                        <div className="proj-dtl-body-coming">
                            <h5 className="proj-dtl-body-coming-title h5">Coming Soon</h5>
                            <div className="proj-dtl-body-coming-desc">
                                Thank you for your interest! In the mean time, please check out
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default ProjectDetailBody;